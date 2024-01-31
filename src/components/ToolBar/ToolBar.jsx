import ToolMenu from "../ToolMenu/ToolMenu";
import "./ToolBar.scss";
import axios from "axios";
import ModalInput from "../ModalInput/ModalInput";
import useTools from "../../hooks/useTools";
import { useState } from "react";
import ColorTools from "../ColorTools/ColorTools";
import ModalUpload from "../ModalUpload/ModalUpload";
import { useReactFlow } from "reactflow";
import { nanoid } from "nanoid";
import getRandomCoords from "../../utils/get-random-coords";
import Modal from "react-modal";
import ModalDefinition from "../ModalDefinition/ModalDefinition";
import useWordTools from "../../hooks/useWordTools";

const ToolBar = () => {
  const {
    wordTools,
    chosenWord,
    handleWordChange,
    closeModal,
    definitions,
    isModalOpen,
  } = useWordTools();
  const { tools } = useTools();

  return (
    <>
      <nav className="tool-nav">
        <ModalUpload />
        <ModalInput />
        <ToolMenu title="tools" list={tools} heightValue="6rem" />
        <ToolMenu
          title="word"
          list={wordTools}
          heightValue="10rem"
          isWordTool={true}
          handleWordChange={handleWordChange}
          chosenWord={chosenWord}
        />
        <ColorTools />
      </nav>
      <ModalDefinition
        modalIsOpen={isModalOpen}
        closeModal={closeModal}
        definitions={definitions}
        chosenWord={chosenWord}
      />
    </>
  );
};

export default ToolBar;
