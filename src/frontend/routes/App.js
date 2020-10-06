import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import '../assets/styles/utils/Reset.scss';
import PublicRoute from '../components/Public/PublicRoute';
import AdminRoute from '../components/Admin/AdminRoute';
import routes from '../../server/routes/routes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          isAdmin ? (
            <AdminRoute {...route} key={i} />
          ) : (
            <PublicRoute {...route} key={i} />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
