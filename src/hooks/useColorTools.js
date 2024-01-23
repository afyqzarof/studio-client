import getRandomCoords from "../utils/get-random-coords";
import {
  getComplementaryColor,
  getAnalogousColors,
  getTriadicColors,
} from "../utils/color-methods";
import { useReactFlow, useOnSelectionChange } from "reactflow";
import { useState } from "react";
import { nanoid } from "nanoid";

const useColorTools = () => {
  const { addNodes } = useReactFlow();
  const [isColorSelected, setIsColorSelected] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);

  useOnSelectionChange({
    onChange: ({ nodes }) => {
      if (nodes.length === 1 && nodes[0].type === "ColorSelectorNode") {
        setSelectedNode(nodes[0]);
        setIsColorSelected(true);
      } else {
        setIsColorSelected(false);
      }
    },
  });
  const colorTools = [
    {
      id: "5",
      name: "complimentary color",
      onClick: () => {
        addNodes({
          id: nanoid(10),
          type: "ColorSelectorNode",
          data: { color: getComplementaryColor(selectedNode.data.color) },
          position: getRandomCoords(),
        });
      },
    },
    {
      id: "6",
      name: "analogous colors",
      onClick: () => {
        const analogousColors = getAnalogousColors(selectedNode.data.color);
        const newNodes = analogousColors.map((color) => {
          return {
            id: nanoid(10),
            type: "ColorSelectorNode",
            data: { color: color },
            position: getRandomCoords(),
          };
        });
        addNodes(newNodes);
      },
    },
    {
      id: "7",
      name: "triadic colors",
      onClick: () => {
        const triadicColors = getTriadicColors(selectedNode.data.color);
        const newNodes = triadicColors.map((color) => {
          return {
            id: nanoid(10),
            type: "ColorSelectorNode",
            data: { color: color },
            position: getRandomCoords(),
          };
        });
        addNodes(newNodes);
      },
    },
  ];
  return { isColorSelected, colorTools };
};

export default useColorTools;
