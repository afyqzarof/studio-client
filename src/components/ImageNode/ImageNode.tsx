import { memo } from "react";
import { NodeProps, NodeResizer } from "reactflow";
import "./ImageNode.scss";
import NodeWrapper from "../NodeWrapper/NodeWrapper";
import useIsDemo from "../../hooks/useIsDemo";

const ImageNode = memo(({ selected, data }: NodeProps) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const isDemo = useIsDemo();

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
          src={isDemo ? data.file : baseUrl + "/upload/" + data.file}
          alt={data.file}
          className="image-node"
        />
      </NodeWrapper>
    </>
  );
});

export default ImageNode;
