import { memo } from "react";
import { NodeResizer } from "reactflow";
import "./ImageNode.scss";
import NodeWrapper from "../NodeWrapper/NodeWrapper";

const ImageNode = memo(({ selected, data, id }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={50}
        minHeight={50}
      />
      <NodeWrapper>
        <img
          src={baseUrl + "/api/upload/" + "1706130106652.png"}
          className="image-node"
        />
      </NodeWrapper>
    </>
  );
});

export default ImageNode;
