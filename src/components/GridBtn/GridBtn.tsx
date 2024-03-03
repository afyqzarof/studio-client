import "./GridBtn.scss";
type GridBtnProps = {
  isGrid: boolean;
  handleChangeGrid: () => void;
};
const GridBtn = ({ isGrid, handleChangeGrid }: GridBtnProps) => {
  return (
    <button className="grid-btn" onClick={handleChangeGrid}>
      {isGrid ? "grid" : "no grid"}
    </button>
  );
};

export default GridBtn;
