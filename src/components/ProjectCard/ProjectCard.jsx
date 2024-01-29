import "./ProjectCard.scss";
import imgSrc from "../../assets/images/board-img.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/board/1");
  };
  return (
    <article className="project-wrapper">
      <h2 className="project__title">project title</h2>
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
        <p className="project__caption">other description</p>
        <h3 className="project__date">23.03.2024</h3>
        <p className="project__category">category</p>
      </div>
    </article>
  );
};

export default ProjectCard;
