import { Link } from "react-router-dom";
import "./BoardHeader.scss";
import upIconDefault from "../../assets/icons/arrow-N-default.svg";
import upIconSelected from "../../assets/icons/arrow-N-selected.svg";
import { useEffect, useState } from "react";
import { useReactFlow, getViewportForBounds, getNodesBounds } from "reactflow";
import { toPng } from "html-to-image";
import axios from "axios";
import { useParams } from "react-router-dom";

const BoardHeader = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [isIconSelected, setIsIconSelected] = useState(false);
  const { getNodes } = useReactFlow();
  const { boardId } = useParams();

  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchBoard = async () => {
      const { data } = await axios.get(baseUrl + "/boards/" + boardId);
      setTitle(data.title);
    };
    fetchBoard();
  }, []);
  const handleSave = () => {
    const pins = getNodes();
    const formattedPins = pins.map((pin) => {
      return {
        board_id: 3,
        width: pin.width,
        height: pin.height,
        id: pin.id,
        type: pin.type,
        data: pin.data,
        x_coord: Math.floor(pin.position.x),
        y_coord: Math.floor(pin.position.y),
      };
    });
    console.log(formattedPins);
  };

  const postThumbnail = async (dataUrl) => {
    const arr = dataUrl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[arr.length - 1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const thumbnailFile = new File([u8arr], "thumbnail.jpg", { type: mime });
    console.log(thumbnailFile);
    const formData = new FormData();
    formData.append("file", thumbnailFile);
    const { data } = await axios.post(baseUrl + "/upload", formData);
    console.log(data);
  };
  const imageWidth = 1024;
  const imageHeight = 768;
  const onClick = async () => {
    const nodesBounds = getNodesBounds(getNodes());
    const transform = getViewportForBounds(
      nodesBounds,
      imageWidth,
      imageHeight,
      0.5,
      2
    );

    const pngFile = await toPng(
      document.querySelector(".react-flow__viewport"),
      {
        backgroundColor: "#fff",
        width: imageWidth,
        height: imageHeight,
        style: {
          width: imageWidth,
          height: imageHeight,
          transform: `translate(${transform[0]}px, ${transform[1]}px) scale(${transform[2]})`,
        },
      }
    );
    postThumbnail(pngFile);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header className="board-header">
      <nav className="nav">
        <div className="nav__right">
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
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <ul className="nav__right-container">
          <button className="nav__btn">collaborate</button>
          <button className="nav__btn" onClick={onClick}>
            publish
          </button>
          <button className="nav__btn" onClick={handleSave}>
            save
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default BoardHeader;
