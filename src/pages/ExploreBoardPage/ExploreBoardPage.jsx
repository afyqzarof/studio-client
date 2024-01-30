import ReactFlow, {
  Background,
  useNodesState,
  ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/base.css";
import YoutubeVidNode from "../../components/YoutubeVidNode/YoutubeVidNode";
import ColorSelectorNode from "../../components/ColorSelectorNode/ColorSelectorNode";
import { useEffect, useState } from "react";
import TextNode from "../../components/TextNode/TextNode";
import ImageNode from "../../components/ImageNode/ImageNode";
import SpotifyNode from "../../components/SpotifyNode/SpotifyNode";
import PinterestNode from "../../components/PinterestNode/PinterestNode";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./ExploreBoardPage.scss";
import ExploreBoardHeader from "../../components/ExploreBoardHeader/ExploreBoardHeader";
const ExploreBoardPage = () => {
  const nodeTypes = {
    ColorSelectorNode,
    YoutubeVidNode,
    TextNode,
    ImageNode,
    SpotifyNode,
    PinterestNode,
  };
  const [nodes, setNodes] = useNodesState([]);
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

  return (
    <div className="board-wrapper">
      <ExploreBoardHeader />
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} fitView panOnScroll nodeTypes={nodeTypes}>
          <Background variant="dots" />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default ExploreBoardPage;
