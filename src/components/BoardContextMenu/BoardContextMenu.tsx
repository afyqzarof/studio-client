type BoardContextMenuProps = {
  positionX: number;
  positionY: number;
  isToggled: boolean;
};

const BoardContextMenu = ({
  positionX,
  positionY,
  isToggled,
}: BoardContextMenuProps) => {
  return (
    <menu
      className={`context-menu ${isToggled ? "active" : "not-active"}`}
      style={{ top: positionY + 2 + "px", left: positionX + 2 + "px" }}>
      <p className="context-menu__btn">make public/private</p>
      <p className="context-menu__btn">delete</p>
    </menu>
  );
};

export default BoardContextMenu;
