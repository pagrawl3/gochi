import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Provider from './components/Context/Provider';
import AuthOnly from './components/AuthOnly';
import Login from './containers/Login';
import Callback from './containers/Login/Callback';
import Dashboard from './containers/Dashboard';
import DetailedView from './containers/DetailedView';

import './App.scss';

const INITIAL_STATE = {
  categories: [],
  statuses: [],
  emailOpen: false,
  user: {}
};

function App() {
  return (
    <Provider value={INITIAL_STATE}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/callback" component={Callback} />

            {/* AUTH ONLY */}
            <AuthOnly fallback="/login">
              <Route path="/emails" component={Dashboard} />
              <Redirect exact from="/" to="/emails" />
              <DetailedView />
            </AuthOnly>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
