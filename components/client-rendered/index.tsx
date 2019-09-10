import { useState, useEffect } from 'react';

export const OffSSR: React.FC = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return isClient ? <>{children}</> : <></>;
};

export function offSSR<P extends {}>(Any: React.FC<P>): React.FC<P> {
  return props => (
    <OffSSR>
      <Any {...props} />
    </OffSSR>
  );
}
