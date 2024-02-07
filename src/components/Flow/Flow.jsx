import ReactFlow, { Background, MiniMap, SelectionMode } from "reactflow";
import "reactflow/dist/base.css";
import "./Flow.scss";
import { useRef, useCallback, useState } from "react";
import ContextMenu from "../ContextMenu/ContextMenu";
import ToolBar from "../ToolBar/ToolBar";
import useNodeTypes from "../../hooks/useNodeTypes";
import useFetchPins from "../../hooks/useFetchPins";
const nodeTypes = useNodeTypes();
const Flow = ({ isGrid }) => {
  const { nodes, onNodesChange } = useFetchPins();
  const [menu, setMenu] = useState(null);
  const ref = useRef(null);
  const onNodeContextMenu = useCallback(
    (event, node) => {
      // Prevent native context menu from showing
      event.preventDefault();

      // Calculate position of the context menu. We want to make sure it
      // doesn't get positioned off-screen.
      const pane = ref.current.getBoundingClientRect();
      setMenu({
        id: node.id,
        top: event.clientY < pane.height - 200 && event.clientY,
        left: event.clientX < pane.width - 200 && event.clientX,
        right: event.clientX >= pane.width - 200 && pane.width - event.clientX,
        bottom:
          event.clientY >= pane.height - 200 && pane.height - event.clientY,
      });
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
        <Background variant="dots" />
        <MiniMap zoomable pannable />
        {menu && <ContextMenu onClick={onPaneClick} {...menu} />}
      </ReactFlow>
    </>
  );
};
export default Flow;
