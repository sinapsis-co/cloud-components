import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Routes from './routes';

import './index.css';

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Switch>
        {Routes.map((route, index) => (
          <Route
            path={route.path}
            exact
            key={index}
            render={(props) =>
              React.createElement(route.component, {
                ...props,
              } as React.Attributes)
            }
          />
        ))}
        <Route exact path="/">
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </div>
  );
}
