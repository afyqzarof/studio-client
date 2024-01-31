import BoardHeader from "../../components/BoardHeader/BoardHeader";
import ToolBar from "../../components/ToolBar/ToolBar";
import "./BoardPage.scss";
import { ReactFlowProvider } from "reactflow";
import "reactflow/dist/base.css";
import Flow from "../../components/Flow/Flow";
import GridBtn from "../../components/GridBtn/GridBtn";
import DarkModeBtn from "../../components/DarkModeBtn/DarkModeBtn";
import { useState } from "react";
import { useIsGrid } from "../../hooks/useIsGrid";

const BoardPage = () => {
  // const { isGrid, handleChangeGrid } = useIsGrid(false);

  return (
    <>
      <div className="board-wrapper">
        {/* <div className="view-container">
          <GridBtn isGrid={isGrid} handleChangeGrid={handleChangeGrid} />
          <DarkModeBtn />
        </div> */}
        <ReactFlowProvider>
          <BoardHeader />
          <main className="board">
            <Flow />
          </main>
        </ReactFlowProvider>
      </div>
    </>
  );
};

export default BoardPage;
