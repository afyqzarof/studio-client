import ToolMenu from "../ToolMenu/ToolMenu";
import "./ToolBar.scss";
import { useReactFlow } from "reactflow";
import ModalInput from "../ModalInput/ModalInput";
import useTools from "../../hooks/useTools";
import { useState } from "react";
import ColorTools from "../ColorTools/ColorTools";

const ToolBar = () => {
  const { getNodes } = useReactFlow();
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
      <button
        className="btn-container__btn"
        onClick={() => {
          console.log(getNodes());
        }}>
        afyq's dev button
      </button>
      <button className="btn-container__btn">upload</button>
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
