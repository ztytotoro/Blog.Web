import React from "react";
import Link from "next/link";

const css = require("./index.scss");

export const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <span className={css.headerTitle}>
        <Link href="/">
          <a>CatLien</a>
        </Link>
      </span>
      <div className={css.headerAvator}>
        <span>Y</span>
      </div>
    </div>
  );
};
