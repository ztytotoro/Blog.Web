import React from 'react';
import Link from 'next/link';
import { Icon } from 'office-ui-fabric-react/lib-commonjs/Icon';

const css = require('./index.scss');

export const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <span className={css.headerTitle}>
        <Link href="/">
          <a>CatLien</a>
        </Link>
      </span>
      <div className={css.headerAvator}>
        <Icon iconName="PartlyCloudyNight"></Icon>
      </div>
    </div>
  );
};
