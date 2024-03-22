import { useCallback } from "react";
import { useReactFlow } from "reactflow";
import "./ContextMenu.scss";
import { nanoid } from "nanoid";
type ContextMenuProps = {
  id: string;
  top?: number | undefined;
  left?: number | undefined;
  right?: number | undefined;
  bottom?: number | undefined;
  onClick: () => void;
};
const ContextMenu = ({
  id,
  top,
  left,
  right,
  bottom,
  ...props
}: ContextMenuProps) => {
  const { getNode, setNodes, addNodes, setEdges } = useReactFlow();
  const duplicateNode = useCallback(() => {
    const node = getNode(id)!;

    const position = {
      x: node.position.x + 50,
      y: node.position.y + 50,
    };
    addNodes({ ...node, id: nanoid(10), position });
  }, [id, getNode, addNodes]);

  const deleteNode = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => node.id !== id));
    setEdges((edges) => edges.filter((edge) => edge.source !== id));
  }, [id, setNodes, setEdges]);

  return (
    <div
      style={{ top, left, right, bottom }}
      className="context-menu"
      {...props}>
      <p className="context-menu__node">node id: {id}</p>
      <p onClick={duplicateNode} className="context-menu__btn">
        duplicate
      </p>
      <p onClick={deleteNode} className="context-menu__btn">
        delete
      </p>
    </div>
  );
};

export default ContextMenu;
