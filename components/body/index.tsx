import React from "react";
const css = require("./index.scss");

export const Body: React.FC = ({ children }) => {
  return <div className={css.body}>{children}</div>;
};
