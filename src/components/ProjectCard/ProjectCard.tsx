import "./ProjectCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useIsDemo from "../../hooks/useIsDemo";
import BoardContextMenu from "../BoardContextMenu/BoardContextMenu";
import useContextMenu from "../../hooks/useContextMenu";
import ModalGeneral from "../ModalGeneral/ModalGeneral";
import useModal from "../../hooks/useModal";
type ProjectCardProps = {
  title: string;
  imgSrc: string;
  description: string | undefined;
  date: string;
  category: string | undefined;
  boardId: string;
  author: any;
  handleDelete: () => void;
};
const ProjectCard = ({
  title,
  imgSrc,
  description,
  date,
  category,
  boardId,
  author,
  handleDelete,
}: ProjectCardProps) => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const isDemo = useIsDemo();
  const { clicked, points, handleContext } = useContextMenu();
  const { openModal, closeModal, modalIsOpen } = useModal();

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

  return (
    <>
      {clicked && !author && (
        <BoardContextMenu
          isToggled={clicked}
          positionX={points.x}
          positionY={points.y}
          openModal={openModal}
        />
      )}
      <article className="project-wrapper" onContextMenu={handleContext}>
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
      {modalIsOpen && (
        <ModalGeneral
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          title={`delete ${!title ? "untitled" : title}?`}
          onClick={handleDelete}
        />
      )}
    </>
  );
};

export default ProjectCard;
