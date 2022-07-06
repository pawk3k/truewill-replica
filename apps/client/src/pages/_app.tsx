import type { AppProps } from 'next/app';
import { Button } from 'ui';

export const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <div>
      <Button primary label="Button label" />
    </div>
  );
};

export default MyApp;
