import React from "react";
import { ErrorProps } from "../../utils/types";

const Error: React.FC<ErrorProps> = ({ message }) => {
  return <h3 className="text-error text-center">Error: {message}</h3>;
};

export default Error;
