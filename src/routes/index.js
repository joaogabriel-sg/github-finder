import { Route, Switch } from 'react-router-dom';

import SearchPage from '../pages/SearchPage';
import UserPage from '../pages/UserPage';
import NotFoundPage from '../pages/NotFoundPage';

const Routes = () => (
  <Switch>
    <Route path="/" component={SearchPage} exact />
    <Route path="/user/:username" component={UserPage} exact />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Routes;
