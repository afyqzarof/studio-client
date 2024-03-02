import React from "react";
import "./NodeWrapper.scss";

const NodeWrapper = ({ children }: React.PropsWithChildren) => {
  return <article className="node-wrapper">{children}</article>;
};

export default NodeWrapper;
