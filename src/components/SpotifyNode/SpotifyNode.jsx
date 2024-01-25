import { memo } from "react";
import { NodeResizer } from "reactflow";
import NodeWrapper from "../NodeWrapper/NodeWrapper";

const SpotifyNode = memo(({ selected, data }) => {
  return (
    <>
      <NodeResizer
        color="#ff0071"
        isVisible={selected}
        minWidth={200}
        minHeight={200}
      />
      <NodeWrapper>
        <iframe
          src={`https://open.spotify.com/embed/track/${data.track_id}?utm_source=generator`}
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
      </NodeWrapper>
    </>
  );
});
export default SpotifyNode;
