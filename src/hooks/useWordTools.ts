import React, { useState } from "react";
import { useReactFlow } from "reactflow";
import axios from "axios";
import { nanoid } from "nanoid";
import getRandomCoords from "../utils/get-random-coords";
import { Definition } from "../components/ModalDefinition/ModalDefinition";

const useWordTools = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [definitions, setDefinitions] = useState<Definition[]>([]);
  const [chosenWord, setChosenWord] = useState("");
  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }
  const { addNodes } = useReactFlow();

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value;
    setChosenWord(word.replace(/ |[0-9]|[^\w\s]|_/g, ""));
  };
  const addWordNode = async (type: string) => {
    if (!chosenWord) {
      return;
    }
    const { data: words } = await axios.get(
      baseUrl + "/word/" + chosenWord + "/" + type
    );

    if (words.length === 0) {
      return;
    }

    addNodes({
      id: nanoid(10),
      type: "TextNode",
      data: { text: words.join(", ") },
      position: getRandomCoords(),
    });
  };

  const getWordDefinition = async () => {
    if (!chosenWord) {
      return;
    }
    try {
      const { data } = await axios.get(
        baseUrl + "/word/" + chosenWord + "/definition"
      );
      setDefinitions(data);
      openModal();
    } catch (error) {
      setDefinitions([
        { partOfSpeech: "could not find definitions", definitions: [] },
      ]);
      openModal();
    }
  };

  const wordTools = [
    { id: 1, name: "look up word", onClick: getWordDefinition },
    {
      id: 2,
      name: "find rhyme",
      onClick: () => {
        addWordNode("rhyme");
      },
    },
    {
      id: 3,
      name: "find synonym",
      onClick: () => {
        addWordNode("synonym");
      },
    },
    {
      id: 4,
      name: "find antonym",
      onClick: () => {
        addWordNode("antonym");
      },
    },
  ];

  return {
    wordTools,
    chosenWord,
    handleWordChange,
    closeModal,
    definitions,
    isModalOpen,
  };
};

export default useWordTools;
