import ReactFlow, { Background, useNodesState } from "reactflow";
import "reactflow/dist/base.css";
import YoutubeVidNode from "../YoutubeVidNode/YoutubeVidNode";
import ColorSelectorNode from "../ColorSelectorNode/ColorSelectorNode";
import "./Flow.scss";
import { useRef, useCallback, useState, useEffect } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";
// import initialNodes from "../../data/initial-nodes.json";
import TextNode from "../TextNode/TextNode";
import ToolBar from "../ToolBar/ToolBar";
import ImageNode from "../ImageNode/ImageNode";
import SpotifyNode from "../SpotifyNode/SpotifyNode";
import { useParams } from "react-router-dom";
import axios from "axios";

const nodeTypes = {
  ColorSelectorNode,
  YoutubeVidNode,
  TextNode,
  ImageNode,
  SpotifyNode,
};
const Flow = ({ isGrid }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const { boardId } = useParams();

  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchPins = async () => {
      const { data } = await axios.get(
        baseUrl + "/api/boards/" + boardId + "/pins"
      );
      const formattedPins = data.map((pin) => {
        return {
          id: pin.id,
          type: pin.type,
          data: JSON.parse(pin.data),
          position: {
            x: pin.x_coord,
            y: pin.y_coord,
          },
          style: {
            height: pin.height,
            width: pin.height,
          },
        };
      });
      setNodes(formattedPins);
    };
    fetchPins();
  }, []);
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
