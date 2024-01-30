import "./ProjectCard.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import placeholder from "../../assets/images/project-thumbnail.png";

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
  const realImgSrc = !imgSrc ? placeholder : imgSrc;

  const handleClick = () => {
    if (!author) {
      navigate("/board/" + boardId);
      return;
    }
    navigate("/explore/" + boardId);
  };
  return (
    <article className="project-wrapper">
      <h2 className="project__title">{title}</h2>
      <div
        className="project"
        style={{ backgroundImage: `url(${realImgSrc})` }}
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
  );
};

export default ProjectCard;
