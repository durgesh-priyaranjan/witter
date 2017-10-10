// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search/:searchTerm?" component={props => <Search {...props} />} />
        <Route exact path="/details/:id" component={Details} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
