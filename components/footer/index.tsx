import React from "react";
const css = require("./index.scss");

export const Footer: React.FC = () => {
  return (
    <div className={css.footer}>
      ztytotoro © 2019 | Powered by{" "}
      <a href="https://dotnet.microsoft.com/" target="_blank">
        .Net Core
      </a>{" "}
      &{" "}
      <a href="https://reactjs.org/" target="_blank">
        React
      </a>
    </div>
  );
};
