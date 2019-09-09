import { Modal } from 'office-ui-fabric-react';

interface Props {
  show: boolean;
}

export const VisitorInfo: React.FC<Props> = ({ children, show }) => {
  return <Modal isOpen={show}>{children}</Modal>;
};
