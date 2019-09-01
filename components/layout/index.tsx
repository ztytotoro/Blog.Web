import React from "react";
const css = require("./index.scss");

import { Header } from "../header";
import { Footer } from "../footer";
import Head from "next/head";
import { Body } from "../body";

interface Props {
  title: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={css.layout}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
      </Head>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};
