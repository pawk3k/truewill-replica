import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Button } from 'ui';

function MyApp({ Component, pageProps }: AppProps) {
  return <div><Button primary label="Button label" /></div>
}

export default MyApp