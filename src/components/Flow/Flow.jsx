import ReactFlow, { Background, useNodesState, useReactFlow } from "reactflow";
import "reactflow/dist/base.css";
import YoutubeVidNode from "../YoutubeVidNode/YoutubeVidNode";
import ColorSelectorNode from "../ColorSelectorNode/ColorSelectorNode";
import "./Flow.scss";
import { useRef, useCallback, useState } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";
import initialNodes from "../../data/initial-nodes.json";
import TextNode from "../TextNode/TextNode";
import ToolBar from "../ToolBar/ToolBar";
import ImageNode from "../ImageNode/ImageNode";
import SpotifyNode from "../SpotifyNode/SpotifyNode";

const nodeTypes = {
  ColorSelectorNode,
  YoutubeVidNode,
  TextNode,
  ImageNode,
  SpotifyNode,
};
const Flow = ({ isGrid }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);
  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
    },
    [setMenu]
  );
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);

  return (
    <>
      <ToolBar />
      <ReactFlow
        ref={ref}
        nodes={nodes}
        fitView
        panOnScroll
        onNodesChange={onNodesChange}
        selectionOnDrag
        snapToGrid={isGrid}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}>
        <Background variant="dots" />
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </>
  );
};
export default Flow;
