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
  const { isGrid, handleChangeGrid } = useIsGrid(false);

  return (
    <>
      <div className="board-wrapper">
        <BoardHeader />
        <div className="view-container">
          <GridBtn isGrid={isGrid} handleChangeGrid={handleChangeGrid} />
          <DarkModeBtn />
        </div>
        <main className="board">
          <ReactFlowProvider>
            {/* <ToolBar /> */}
            <Flow isGrid={isGrid} />
          </ReactFlowProvider>
        </main>
      </div>
    </>
  );
};

export default BoardPage;
