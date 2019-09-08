import React from 'react';
import App from 'next/app';
import { initializeIcons } from '@uifabric/icons';
import { setSSR, setRTL, ResponsiveMode } from 'office-ui-fabric-react';
import { setResponsiveMode } from 'office-ui-fabric-react/lib-amd/utilities/decorators/withResponsiveMode';

initializeIcons(undefined, {
  disableWarnings: true
});

// Set ssr mode to true, and rtl to false.
setSSR(true);
setRTL(false);

// Assume a large screen.
// setResponsiveMode(ResponsiveMode.large);

class BlogApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default BlogApp;
