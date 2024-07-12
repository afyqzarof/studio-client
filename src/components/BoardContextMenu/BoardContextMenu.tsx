import "../ContextMenu/ContextMenu.scss";

type BoardContextMenuProps = {
  positionX: number;
  positionY: number;
  isToggled: boolean;
  openModal: () => void;
};

const BoardContextMenu = ({
  positionX,
  positionY,
  isToggled,
  openModal,
}: BoardContextMenuProps) => {
  const handleDelete = () => {
    console.log("delete");
    openModal();
  };
  return (
    <menu
      className={`context-menu ${isToggled ? "active" : "not-active"}`}
      style={{ top: positionY + 2 + "px", left: positionX + 2 + "px" }}>
      <p className="context-menu__btn">make public/private</p>
      <p className="context-menu__btn" onClick={handleDelete}>
        delete
      </p>
    </menu>
  );
};

export default BoardContextMenu;
