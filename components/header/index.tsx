import React from "react";
const css = require("./index.scss");

export const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <span className={css.headerTitle}>CatLien</span>
      <div className={css.headerAvator}>
        <span>Y</span>
      </div>
    </div>
  );
};
