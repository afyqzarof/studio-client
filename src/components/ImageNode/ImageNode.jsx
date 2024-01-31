import { memo } from "react";
import { NodeResizer } from "reactflow";
import "./ImageNode.scss";
import NodeWrapper from "../NodeWrapper/NodeWrapper";

const ImageNode = memo(({ selected, data }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={50}
        minHeight={50}
        keepAspectRatio={true}
      />
      <NodeWrapper>
        <img
          src={baseUrl + "/upload/" + data.file}
          alt={data.file}
          className="image-node"
        />
      </NodeWrapper>
    </>
  );
});

export default ImageNode;
