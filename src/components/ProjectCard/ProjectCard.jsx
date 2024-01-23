import "./ProjectCard.scss";
import imgSrc from "../../assets/images/project-thumbnail.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/board/1");
  };
  return (
    <article
      className="project"
      style={{ backgroundImage: `url(${imgSrc})` }}
      onMouseEnter={() => {
        setIsShown(true);
      }}
      onMouseLeave={() => {
        setIsShown(false);
      }}
      onClick={handleClick}>
      <h2 className="project__title">project title</h2>
      <div
        className={
          isShown
            ? "project__details-container project__details-container--shown"
            : "project__details-container"
        }>
        <p className="project__caption">
          this is a placeholder for project caption
        </p>
        <p className="project__category">category</p>
        <h3 className="project__date">23.03.2024</h3>
      </div>
    </article>
  );
};

export default ProjectCard;