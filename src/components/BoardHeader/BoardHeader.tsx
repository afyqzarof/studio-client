import { useRouter } from "next/navigation";
import "./BoardHeader.scss";
// import upIconDefault from "../../assets/icons/arrow-N-default.svg";
// import upIconSelected from "/icons/arrow-N-selected.svg";
import React, { useEffect, useState } from "react";
import { useReactFlow } from "reactflow";
import axios from "axios";
import { useParams } from "next/navigation";
import useHandleThumbnail from "../../hooks/useHandleThumbnail";
import useIsDemo from "../../hooks/useIsDemo";
import DemoBtn from "../DemoBtn/DemoBtn";
import demoBoards from "../../data/demo-dashboard";
import LoadingModal from "../LoadingModal/LoadingModal";
import Image from "next/image";

const BoardHeader = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [isIconSelected, setIsIconSelected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const { getNodes } = useReactFlow();
  const params = useParams<{ boardId: string }>();
  const boardId = params?.boardId;
  const { handleThumbnail } = useHandleThumbnail();
  const router = useRouter();
  const isDemo = useIsDemo();

  useEffect(() => {
    if (isDemo) {
      const demoBoard = demoBoards.find((board) => board.id === boardId);
      setTitle(!demoBoard ? "" : demoBoard.title);
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    const fetchBoard = async () => {
      try {
        const { data } = await axios.get(baseUrl + "/boards/" + boardId, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTitle(data.title);
      } catch (error) {
        router.push("/dashboard");
        console.log(error);
      }
    };
    fetchBoard();
  }, []);
  const handleSave = async () => {
    if (isDemo) {
      return;
    }
    setIsLoading(true);
    const pins = getNodes();
    const formattedPins = pins.map((pin) => {
      return {
        board_id: boardId,
        width: pin.width,
        height: pin.height,
        id: pin.id,
        type: pin.type,
        data: JSON.stringify(pin.data),
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
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleBack = async () => {
    if (isDemo) {
      router.push("/demo/dashboard");
      return;
    }
    await handleSave();
    router.push("/dashboard");
  };
  return (
    <header className="board-header">
      <nav className="nav">
        <div className="nav__left">
          <div onClick={handleBack}>
            <Image
              onMouseEnter={() => {
                setIsIconSelected(true);
              }}
              onMouseLeave={() => {
                setIsIconSelected(false);
              }}
              src={
                isIconSelected
                  ? "/icons/arrow-N-selected.svg"
                  : "/icons/arrow-N-default.svg"
              }
              alt="up arrow"
              className="nav__icon"
              width={100}
              height={100}
            />
          </div>
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

          {isDemo ? (
            <DemoBtn className={"nav__btn"} name="save" />
          ) : (
            <li>
              <button className="nav__btn" onClick={handleSave}>
                {isLoading ? "loading" : "save"}
              </button>
            </li>
          )}
        </ul>
      </nav>
      <LoadingModal modalIsOpen={isLoading} />
    </header>
  );
};

export default BoardHeader;
