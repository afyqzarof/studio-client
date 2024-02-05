import React from "react";

const BoardContextMenu = ({
  contextMenuRef,
  positionX,
  positionY,
  isToggled,
  boardTitle,
}) => {
  return (
    <menu
      className={`context-menu ${isToggled ? "active" : "not-active"}`}
      ref={contextMenuRef}
      style={{ top: positionY + 2 + "px", left: positionX + 2 + "px" }}>
      <p className="context-menu__btn">edit</p>
      <p className="context-menu__btn">make public/private</p>
      <p className="context-menu__btn">delete</p>
    </menu>
  );
};

export default BoardContextMenu;
