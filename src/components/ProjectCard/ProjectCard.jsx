import "./ProjectCard.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsDemo from "../../hooks/useIsDemo";
import BoardContextMenu from "../BoardContextMenu/BoardContextMenu";

const ProjectCard = ({
  title,
  imgSrc,
  description,
  date,
  category,
  boardId,
  author,
}) => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const isDemo = useIsDemo();
  const [contextMenu, setContextMenu] = useState({
    position: {
      x: 0,
      y: 0,
    },
    toggled: false,
  });

  const handleClick = () => {
    if (author) {
      navigate("/explore/" + boardId);
      return;
    }
    if (isDemo) {
      navigate("/demo/board/" + boardId);
      return;
    }

    navigate("/board/" + boardId);
  };
  const handleContextMenu = (e) => {
    e.preventDefault();

    setContextMenu({
      position: {
        x: e.clientX,
        y: e.clientY,
      },
      toggled: true,
    });
  };
  useEffect(() => {
    const handler = () => {
      setContextMenu({
        position: {
          x: 0,
          y: 0,
        },
        toggled: false,
      });
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });
  return (
    <>
      <article className="project-wrapper" onContextMenu={handleContextMenu}>
        <h2 className="project__title">{!title ? "untitled" : title}</h2>
        <div
          className="project"
          style={{ backgroundImage: `url(${imgSrc})` }}
          onMouseEnter={() => {
            setIsShown(true);
          }}
          onMouseLeave={() => {
            setIsShown(false);
          }}
          onClick={handleClick}>
          {author && <p className="project__author">{author}</p>}
        </div>
        <div
          className={
            isShown
              ? "project__details-container"
              : "project__details-container project__details-container--shown"
          }>
          <p className="project__caption">{description}</p>
          <h3 className="project__date">{date}</h3>
          <p className="project__category">{category}</p>
        </div>
      </article>
      {!author && (
        <BoardContextMenu
          isToggled={contextMenu.toggled}
          positionX={contextMenu.position.x}
          positionY={contextMenu.position.y}
        />
      )}
    </>
  );
};

export default ProjectCard;
