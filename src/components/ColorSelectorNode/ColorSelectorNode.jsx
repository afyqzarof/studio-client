import React, { memo, useState } from "react";
import { NodeResizer, useReactFlow } from "reactflow";
import "./ColorSelectorNode.scss";

const ColorSelectorNode = memo(({ selected, data, id }) => {
  const [color, setColor] = useState(data.color);
  const { setNodes, getNodes, getNode } = useReactFlow();
  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
    const selectedNode = getNode(id);
    selectedNode.data.color = e.target.value;
    const nodes = getNodes();
    const filteredNodes = nodes.filter((node) => node.id !== id);
    setNodes([...filteredNodes, selectedNode]);
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
          <label htmlFor="colorSelector" className="nodrag">
            {color}
          </label>
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
