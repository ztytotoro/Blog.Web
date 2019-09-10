import { useState, useEffect } from 'react';

export const NoSSR: React.FC = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return isClient ? <>{children}</> : <></>;
};

export function noSSR<P extends {}>(
  Any: React.FC<P> | (new () => React.Component<P>)
): React.FC<P> {
  return props => (
    <NoSSR>
      <Any {...props} />
    </NoSSR>
  );
}
