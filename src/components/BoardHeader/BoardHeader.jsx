import { Link, useNavigate } from "react-router-dom";
import "./BoardHeader.scss";
import upIconDefault from "../../assets/icons/arrow-N-default.svg";
import upIconSelected from "../../assets/icons/arrow-N-selected.svg";
import { useEffect, useState } from "react";
import { useReactFlow } from "reactflow";
import axios from "axios";
import { useParams } from "react-router-dom";
import useHandleThumbnail from "../../hooks/useHandleThumbnail";

const BoardHeader = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [isIconSelected, setIsIconSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const { getNodes } = useReactFlow();
  const { boardId } = useParams();
  const { handleThumbnail } = useHandleThumbnail();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchBoard = async () => {
      try {
        const { data } = await axios.get(baseUrl + "/boards/" + boardId, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(data.title);
      } catch (error) {
        navigate("/dashboard");
        console.log(error);
      }
    };
    fetchBoard();
  }, []);
  const handleSave = async () => {
    setIsLoading(true);
    const pins = getNodes();
    const formattedPins = pins.map((pin) => {
      return {
        board_id: boardId,
        width: pin.width,
        height: pin.height,
        id: pin.id,
        type: pin.type,
        data: pin.data,
        x_coord: Math.floor(pin.position.x),
        y_coord: Math.floor(pin.position.y),
      };
    });
    const { filename } = await handleThumbnail();
    if (title) {
      const boardBody = {
        boardId,
        title,
        filename,
      };

      await axios.patch(baseUrl + "/boards/save", boardBody);
    }

    await axios.patch(baseUrl + "/boards/" + boardId + "/pins", {
      newPins: formattedPins,
    });
    setIsLoading(false);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header className="board-header">
      <nav className="nav">
        <div className="nav__left">
          <Link to="/dashboard">
            <img
              onMouseEnter={() => {
                setIsIconSelected(true);
              }}
              onMouseLeave={() => {
                setIsIconSelected(false);
              }}
              src={isIconSelected ? upIconSelected : upIconDefault}
              alt="up arrow"
              className="nav__icon"
            />
          </Link>
          <input
            className="nav__title"
            placeholder="untitled"
            value={!title ? "" : title}
            onChange={handleTitleChange}
          />
        </div>
        <ul className="nav__right-container">
          {/* <button className="nav__btn">collaborate</button>
          <button className="nav__btn">publish</button> */}
          <button className="nav__btn" onClick={handleSave}>
            {isLoading ? "loading" : "save"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default BoardHeader;
