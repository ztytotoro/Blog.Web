import React from 'react';
import { Callout, DirectionalHint, Target } from 'office-ui-fabric-react';

interface Props {
  target: Target;
  hidden: boolean;
}

export const VisitorInfoCard: React.FC<Props> = ({ target, hidden }) => {
  return (
    <Callout
      gapSpace={12}
      target={target}
      isBeakVisible={false}
      directionalHint={DirectionalHint.bottomRightEdge}
      hidden={hidden}
    >
      123
    </Callout>
  );
};
