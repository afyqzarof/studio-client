import React, { memo, useState } from "react";
import { NodeProps, NodeResizer, useReactFlow } from "reactflow";
import "./ColorSelectorNode.scss";

const ColorSelectorNode = memo(({ selected, data, id }: NodeProps) => {
  const [color, setColor] = useState(data.color);
  const { setNodes, getNodes, getNode } = useReactFlow();
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    const selectedNode: any = getNode(id);
    selectedNode.data.color = e.target.value;
    const nodes = getNodes();
    const filteredNodes = nodes.filter((node) => node.id !== id);
    setNodes([...filteredNodes, selectedNode]);
  };

  const handleTextColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.slice(1);

    if (input.length < 1 || input.length > 6) {
      return;
    }

    if (/^[0-9a-f]+$/.test(input) || input === "") {
      setColor("#" + input);
    }
  };

  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={200}
        minHeight={230}
      />
      <article className="color-select">
        <div
          className="color-select__color"
          style={{ backgroundColor: color }}></div>
        <div className="color-select__container">
          {/* <p className="nodrag">{color}</p> */}
          <input
            type="text"
            className="color-select__text-input"
            value={color}
            onChange={handleTextColorChange}
          />
          <input
            onChange={handleColorChange}
            className="nodrag color-select__input"
            type="color"
            value={color}
            id="colorSelector"
          />
        </div>
      </article>
    </>
  );
});

export default ColorSelectorNode;
