import { useState } from "react";
import "./GridBtn.scss";

const GridBtn = ({ isGrid, handleChangeGrid }) => {
  // const [isGrid, setIsGrid] = useState(true);
  // const handleChangeGrid = () => {
  //   setIsGrid(!isGrid);
  // };

  return (
    <button className="grid-btn" onClick={handleChangeGrid}>
      {isGrid ? "grid" : "no grid"}
    </button>
  );
};

export default GridBtn;
