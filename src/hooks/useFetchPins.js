import { useNodesState } from "reactflow";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useFetchPins = () => {
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

  return { nodes, onNodesChange };
};
export default useFetchPins;
