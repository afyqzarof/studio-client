import ReactFlow, {
  Background,
  ReactFlowProvider,
  MiniMap,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/base.css";
import "./ExploreBoardPage.scss";
import ExploreBoardHeader from "../../components/ExploreBoardHeader/ExploreBoardHeader";
import useNodeTypes from "../../hooks/useNodeTypes";
import useFetchPins from "../../hooks/useFetchPins";

const nodeTypes = useNodeTypes();
const ExploreBoardPage = () => {
  const { nodes } = useFetchPins();
  return (
    <div className="board-wrapper">
      <ExploreBoardHeader />
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} fitView panOnScroll nodeTypes={nodeTypes}>
          <Background variant={BackgroundVariant.Dots} />
          <MiniMap zoomable pannable />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default ExploreBoardPage;
