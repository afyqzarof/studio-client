import "./GridBtn.scss";

const GridBtn = ({ isGrid, handleChangeGrid }) => {
  return (
    <button className="grid-btn" onClick={handleChangeGrid}>
      {isGrid ? "grid" : "no grid"}
    </button>
  );
};

export default GridBtn;
