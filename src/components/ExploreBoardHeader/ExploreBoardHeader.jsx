import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/icons/arrow-N-default.svg";
import arrowHover from "../../assets/icons/arrow-N-selected.svg";

const ExploreBoardHeader = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const handleArrowClick = () => {
    navigate("/explore");
  };
  return (
    <img
      src={isHover ? arrowHover : arrow}
      alt="arrow"
      className="explore-arrow"
      onClick={handleArrowClick}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    />
  );
};

export default ExploreBoardHeader;
