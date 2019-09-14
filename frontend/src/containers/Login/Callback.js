/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../api';
import Context from '../../components/Context';
import './Login.scss';

function Callback() {
  const [loggedIn, setLoggedIn] = React.useState('');
  const { setState } = React.useContext(Context);

  React.useEffect(() => {
    const token = '';
    API.login(token).then(data => {
      const { token } = data;
      const { dashboards, ...user } = data.user;
      API._setToken(token);
      setState({ user, dashboards });
      setLoggedIn(true);
    });
  }, []);

  return loggedIn ? <Redirect to="/emails" /> : <div className="callback"></div>;
}

export default Callback;
