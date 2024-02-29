import "./YoutubeVidNode.scss";
import { memo } from "react";
import { NodeProps, NodeResizer } from "reactflow";

const YoutubeVidNode = memo(({ selected, data }: NodeProps) => {
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={200}
        minHeight={230}
      />
      <div className="yt-container">
        <iframe
          title="youtube video"
          className="yt-container__video"
          src={`https://www.youtube.com/embed/${data.youtube_id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </div>
    </>
  );
});

export default YoutubeVidNode;
