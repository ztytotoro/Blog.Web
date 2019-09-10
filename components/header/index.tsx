import React, { createRef, useState } from 'react';
import Link from 'next/link';
import { Icon } from 'office-ui-fabric-react/lib-commonjs/Icon';
import { VisitorInfoCard } from '../visitor-info-card';

const css = require('./index.scss');

export const Header: React.FC = () => {
  let icon = createRef<HTMLElement>();
  const [hideCard, toggleCard] = useState(true);
  return (
    <div className={css.header}>
      <span className={css.headerTitle}>
        <Link href="/">
          <a>CatLien</a>
        </Link>
      </span>
      <div className={css.headerAvator}>
        <span ref={icon} onClick={() => toggleCard(false)}>
          <Icon iconName="PartlyCloudyNight" />
        </span>

        <VisitorInfoCard target={icon.current} hidden={hideCard} />
      </div>
    </div>
  );
};
