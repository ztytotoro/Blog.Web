import { Modal } from 'office-ui-fabric-react';
const css = require('./index.scss');

export const VisitorInfo: React.FC = () => {
  let show = true;
  if (getVisitorInfo()) {
    show = false;
  }
  return (
    <Modal isOpen={show}>
      <div className={css.container}>1231</div>
    </Modal>
  );
};

function getVisitorInfo() {
  return JSON.parse(localStorage.getItem('whoru'));
}
