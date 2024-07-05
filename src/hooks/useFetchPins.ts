import { useNodesState } from "reactflow";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useIsDemo, { IsDemo } from "./useIsDemo";
import demoPins, { Pin } from "../data/demo-pins";

const useFetchPins = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const { boardId } = useParams();
  const isDemo: IsDemo = useIsDemo();

  useEffect(() => {
    if (isDemo) {
      const filteredDemoPins = demoPins.filter(
        (pin) => pin.board_id === boardId
      );
      const formattedDemoPins = filteredDemoPins.map((pin) => {
        return {
          id: pin.id,
          type: pin.type,
          data: pin.data,
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

      setNodes(formattedDemoPins);
      return;
    }
    const fetchPins = async () => {
      const { data } = await axios.get(
        baseUrl + "/boards/" + boardId + "/pins"
      );
      const formattedPins = data.map((pin: Pin<string>) => {
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

  return { nodes, onNodesChange };
};
export default useFetchPins;
