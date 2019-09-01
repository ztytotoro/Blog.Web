import React from "react";
const css = require("./index.scss");

export const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <span className={css.headerTitle}>catlien.com</span>
      <div className={css.headerAvator}></div>
    </div>
  );
};
