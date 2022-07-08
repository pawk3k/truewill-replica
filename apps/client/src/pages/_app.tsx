import { Button } from 'ui';

import Repo from '../assets/repo.svg';

export const MyApp = (): JSX.Element => (
  <div>
    <Repo />
    <Button primary label="Button label" />
  </div>
);

export default MyApp;
