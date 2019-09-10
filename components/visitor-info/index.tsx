import { Modal } from 'office-ui-fabric-react';
import { NoSSR, noSSR } from '../client-rendered';
import { useState } from 'react';
const css = require('./index.scss');

const InnerComponent: React.FC = () => {
  const [show, updateShow] = useState(true);
  if (getVisitorInfo()) {
    updateShow(false);
  }
  return (
    <Modal isOpen={show}>
      <div className={css.container}>1231</div>
    </Modal>
  );
};

export const VisitorInfo = noSSR(() => {
  return <InnerComponent />;
});

function getVisitorInfo() {
  return JSON.parse(localStorage.getItem('whoru'));
}
