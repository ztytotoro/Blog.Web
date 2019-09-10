import { Modal } from 'office-ui-fabric-react';
import { noSSR } from 'react-csr';
import { useState } from 'react';
const css = require('./index.scss');

export const VisitorInfo = noSSR(() => {
  const [show, updateShow] = useState(true);
  if (getVisitorInfo()) {
    updateShow(false);
  }
  return (
    <Modal isOpen={show}>
      <div className={css.container}>1231</div>
    </Modal>
  );
});

function getVisitorInfo() {
  return JSON.parse(localStorage.getItem('whoru'));
}
