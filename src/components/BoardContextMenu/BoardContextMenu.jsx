import { ContextMenu, ContextMenuItem } from "rctx-contextmenu";

const BoardContextMenu = () => {
  return (
    <ContextMenu id="project-card" className="context-menu">
      <ContextMenuItem className="context-menu__btn">
        this is menu
      </ContextMenuItem>
    </ContextMenu>
  );
};

export default BoardContextMenu;
