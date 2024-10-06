import React from "react";
import { ReactComponent as WorkingSync } from "../imgs/Loading.svg";

const LoadingSpinner = ({ ...rest }) => {
  const content = (
    <div {...rest}>
      <WorkingSync className="w-5 animate-spin" />
    </div>
  );

  return content;
};

export default LoadingSpinner;
