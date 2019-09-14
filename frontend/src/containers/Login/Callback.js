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
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');
    API.login(code).then(data => {
      const { token } = data;
      const { dashboards, ...user } = data.user;
      API._setToken(token);
      setState({ user, dashboards });
      setLoggedIn(true);
    });
  }, []);

  return loggedIn ? <Redirect to="/emails" /> : <div className="login"></div>;
}

export default Callback;
