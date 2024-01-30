import ToolMenu from "../ToolMenu/ToolMenu";
import "./ToolBar.scss";
import axios from "axios";
import ModalInput from "../ModalInput/ModalInput";
import useTools from "../../hooks/useTools";
import { useState } from "react";
import ColorTools from "../ColorTools/ColorTools";
import ModalUpload from "../ModalUpload/ModalUpload";
import { useReactFlow } from "reactflow";
import { nanoid } from "nanoid";
import getRandomCoords from "../../utils/get-random-coords";

const ToolBar = () => {
  const { tools } = useTools();
  const [chosenWord, setChosenWord] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { addNodes } = useReactFlow();

  const handleWordChange = (e) => {
    const word = e.target.value;
    setChosenWord(word.replace(/ |[0-9]|[^\w\s]|_/g, ""));
  };
  const addWordNode = async (type) => {
    if (!chosenWord) {
      return;
    }
    const { data: words } = await axios.get(
      baseUrl + "/api/word/" + chosenWord + "/" + type
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
    const { data: definition } = await axios.get(
      baseUrl + "/api/word/" + chosenWord + "/definition"
    );
    console.log(definition);
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

  return (
    <nav className="tool-nav">
      <ModalUpload />
      <ModalInput />
      <ToolMenu title="tools" list={tools} heightValue="6rem" />
      <ToolMenu
        title="word"
        list={wordTools}
        heightValue="10rem"
        isWordTool={true}
        handleWordChange={handleWordChange}
        chosenWord={chosenWord}
      />
      <ColorTools />
    </nav>
  );
};

export default ToolBar;
