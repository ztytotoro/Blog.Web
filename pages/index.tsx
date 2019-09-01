import React from "react";
import { Layout } from "../components/layout";
const css = require("./index.scss");

const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <div className={css.body}>
        <h1>Hello, World!</h1>
      </div>
    </Layout>
  );
};

export default Home;
