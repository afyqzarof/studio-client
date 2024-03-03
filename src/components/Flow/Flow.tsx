import ReactFlow, {
  Background,
  BackgroundVariant,
  MiniMap,
  SelectionMode,
  Node,
} from "reactflow";
import "reactflow/dist/base.css";
import "./Flow.scss";
import { useRef, useCallback, useState } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";
import ToolBar from "../ToolBar/ToolBar";
import useNodeTypes from "../../hooks/useNodeTypes";
import useFetchPins from "../../hooks/useFetchPins";
const nodeTypes = useNodeTypes();
const Flow = () => {
  type MenuState = {
    id: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };

  const { nodes, onNodesChange } = useFetchPins();
  const [menu, setMenu] = useState<MenuState | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);
  const onNodeContextMenu = useCallback(
    (event: any, node: Node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const contextRef = ref.current;

      if (contextRef) {
        const pane = contextRef.getBoundingClientRect();
        setMenu({
          id: node.id,
          top: event.clientY < pane.height - 200 ? event.clientY : undefined,
          left: event.clientX < pane.width - 200 ? event.clientX : undefined,
          right:
            event.clientX >= pane.width - 200
              ? pane.width - event.clientX
              : undefined,
          bottom:
            event.clientY >= pane.height - 200
              ? pane.height - event.clientY
              : undefined,
        });
      }
    },
    [setMenu]
  );
  const onPaneClick = useCallback(() => setMenu(null), [setMenu]);
  const panOnDrag = [1, 2];
  return (
    <>
      <ToolBar />
      <ReactFlow
        ref={ref}
        nodes={nodes}
        fitView
        panOnScroll
        onNodesChange={onNodesChange}
        selectionOnDrag
        // snapToGrid={isGrid}
        nodeTypes={nodeTypes}
        onPaneClick={onPaneClick}
        onNodeContextMenu={onNodeContextMenu}
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}>
        <Background variant={BackgroundVariant.Dots} />
        <MiniMap zoomable pannable />
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </>
  );
};
export default Flow;
