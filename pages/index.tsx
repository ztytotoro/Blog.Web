import React from 'react';
import { Layout } from '../components/layout';
import { Icon } from 'office-ui-fabric-react';
import { NextPage } from 'next';
import { VisitorInfo } from '../components/visitor-info';

const css = require('./index.scss');

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className={css.body}>
        <h1>Hello, World!</h1>
        <h1>
          <Icon iconName="GiftboxOpen"></Icon>
        </h1>
        <VisitorInfo />
      </div>
    </Layout>
  );
};

export default Home;
