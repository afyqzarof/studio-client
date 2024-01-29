import "./ProjectCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({
  title,
  imgSrc,
  description,
  date,
  category,
  boardId,
}) => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/board/" + boardId);
  };
  return (
    <article className="project-wrapper">
      <h2 className="project__title">{title}</h2>
      <div
        className="project"
        style={{ backgroundImage: `url(${imgSrc})` }}
        onMouseEnter={() => {
          setIsShown(true);
        }}
        onMouseLeave={() => {
          setIsShown(false);
        }}
        onClick={handleClick}></div>
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
  );
};

export default ProjectCard;
