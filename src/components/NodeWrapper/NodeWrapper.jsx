import "./NodeWrapper.scss";

const NodeWrapper = ({ children, width, height }) => {
  return <article className="node-wrapper">{children}</article>;
};

export default NodeWrapper;
