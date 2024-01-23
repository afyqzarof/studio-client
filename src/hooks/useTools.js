import getRandomCoords from "../utils/get-random-coords";
import getRandomHex from "../utils/get-random-hex";
import { useReactFlow } from "reactflow";
import { nanoid } from "nanoid";

const useTools = () => {
  const { addNodes } = useReactFlow();
  const addRandomColor = () => {
    addNodes({
      id: nanoid(10),
      type: "ColorSelectorNode",
      data: { color: getRandomHex() },
      position: getRandomCoords(),
    });
  };
  const addTextBox = () => {
    addNodes({
      id: nanoid(10),
      type: "TextNode",
      data: { text: "" },
      position: getRandomCoords(),
    });
  };

  const tools = [
    {
      id: "JGoSQH",
      name: "color",
      onClick: addRandomColor,
    },
    {
      id: "hx7Fie",
      name: "text",
      onClick: addTextBox,
    },
    { id: "n58mzZ", name: "line", onClick: () => {} },
    {
      id: "TbXW6L",
      name: "pencil",
      onClick: () => {},
    },
  ];
  return { tools };
};

export default useTools;
