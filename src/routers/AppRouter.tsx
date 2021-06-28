import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ListContinentCountries from '../pages/ListContinentCountries';
import ListContinentsPage from '../pages/ListContinentsPage';
import NotFoundPage from '../pages/NotFoundPage';

const AppRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route
          path="/continents/"
          component={ListContinentsPage}
          exact={true}
        />
        <Route
          path="/continents/:code"
          component={ListContinentCountries}
          exact={true}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
