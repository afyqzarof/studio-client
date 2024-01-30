import ToolMenu from "../ToolMenu/ToolMenu";
import "./ToolBar.scss";

import ModalInput from "../ModalInput/ModalInput";
import useTools from "../../hooks/useTools";
import { useState } from "react";
import ColorTools from "../ColorTools/ColorTools";
import ModalUpload from "../ModalUpload/ModalUpload";

const ToolBar = () => {
  const { tools } = useTools();
  const [chosenWord, setChosenWord] = useState("");

  const handleWordChange = (e) => {
    const word = e.target.value;
    setChosenWord(word.replace(/ |[0-9]|[^\w\s]|_/g, ""));
  };

  const wordTools = [
    { id: 1, name: "look up word", onClick: () => {} },
    {
      id: 2,
      name: "find rhyme",
      onClick: () => {
        if (true) {
          // getRhymes(selectedNode.data.text);
          console.log("get rhymes here");
          return;
        }
        console.log("thats not one word");
      },
    },
    { id: 3, name: "find synonym", onClick: () => {} },
    { id: 4, name: "find antonym", onClick: () => {} },
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
