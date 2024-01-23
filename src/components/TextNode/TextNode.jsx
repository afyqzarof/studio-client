import { memo, useState } from "react";
import { NodeResizer, useReactFlow } from "reactflow";
import "./TextNode.scss";
import NodeWrapper from "../NodeWrapper/NodeWrapper";

const TextNode = memo(({ selected, data, id }) => {
  const [text, setText] = useState(data.text);
  const { setNodes, getNodes, getNode } = useReactFlow();

  const handleTextChange = (e) => {
    setText(e.target.value);
    const selectedNode = getNode(id);
    selectedNode.data.text = e.target.value;
    const nodes = getNodes();
    const filteredNodes = nodes.filter((node) => node.id !== id);
    setNodes([...filteredNodes, selectedNode]);
  };
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={300}
        minHeight={100}
      />
      <NodeWrapper>
        <textarea
          name="text"
          placeholder="write some text"
          className="nodrag text-area"
          onChange={handleTextChange}
          value={text}></textarea>
      </NodeWrapper>
    </>
  );
});

export default TextNode;
