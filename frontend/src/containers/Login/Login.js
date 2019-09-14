/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import API from '../../api';
import GoogleButton from '../../icons/google.svg';
import GochiLogo from '../../icons/gochi.svg';
import './Login.scss';

function Login() {
  const [loginURL, setLoginURL] = React.useState('');

  React.useEffect(() => {
    API.getLoginURL().then(setLoginURL);
  }, []);

  return (
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
