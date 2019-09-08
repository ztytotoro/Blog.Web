import React from 'react';
const css = require('./index.scss');

import { Header } from '../header';
import { Footer } from '../footer';
import Head from 'next/head';
import { Body } from '../body';
import { configureLoadStyles } from '@microsoft/load-themed-styles';

// Store registered styles in a variable used later for injection.
let _allStyles = '';

// Push styles into variables for injecting later.
configureLoadStyles((styles: string) => {
  _allStyles += styles;
});

interface Props {
  title: string;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={css.layout}>
      <Head>
        <title>{'CatLien - ' + title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="../static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Chilanka|Livvic|Manjari|Montserrat|Open+Sans|Raleway|Source+Sans+Pro&display=swap"
          rel="stylesheet"
        ></link>
        <style>${_allStyles}</style>
      </Head>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};
