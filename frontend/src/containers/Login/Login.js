/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Redirect } from 'react-router-dom';

import API from '../../api';
import Context from '../../components/Context';
import GoogleButton from '../../icons/google.svg';
import GochiLogo from '../../icons/gochi.svg';
import './Login.scss';

function Login() {
  const [loader, setLoader] = React.useState(true);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [loginURL, setLoginURL] = React.useState('');
  const { setState } = React.useContext(Context);
  React.useEffect(() => {
    API.getLoginURL().then(({ URL }) => setLoginURL(URL));
    const token = localStorage.token;
    API.authenticate(token)
      .then(data => {
        const { dashboards, ...user } = data.user;
        API._setToken(token);
        setState({ user, dashboards, dashboard: dashboards[0] });
        setLoggedIn(true);
      })
      .finally(() => {
        setLoader(false);
      });
  }, []);

  if (loader) {
    return (
      <div className="login">
        <img
          className="loader"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cd514331234507.564a1d2324e4e.gif"
        />
        <div className="loader-text"> We are preparing your dashboard. Just hold on a few seconds...</div>
      </div>
    );
  }

  return loggedIn ? (
    <Redirect to="/emails" />
  ) : (
    <div className="login">
      <div className="login-card">
        <img className="login-card-logo" src={GochiLogo} alt="" />
        <div className="login-card-title">GOCHI</div>
        <div className="login-card-subtitle">Clarity while managing on call</div>
        <div className="login-card-button">
          <a href={loginURL}>
            <img src={GoogleButton} alt="" />
          </a>
        </div>
      </div>
      <div className="copyright">&copy; Copyright {new Date().getFullYear()}, No One Cares Inc.</div>
    </div>
  );
}

export default Login;
