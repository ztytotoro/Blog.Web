import React from 'react';
import { Layout } from '../components/layout';
import { Icon, Modal } from 'office-ui-fabric-react';
import { NextPage } from 'next';

const css = require('./index.scss');

const Home: NextPage = () => {
  let showVisitor = true;
  return (
    <Layout title="Home">
      <div className={css.body}>
        <h1>Hello, World!</h1>
        <h1>
          <Icon iconName="GiftboxOpen"></Icon>
        </h1>
      </div>

      <Modal isOpen={showVisitor}>1231311</Modal>
    </Layout>
  );
};

export default Home;
