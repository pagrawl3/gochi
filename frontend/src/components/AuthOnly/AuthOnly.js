import React from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../Context';

function AuthOnly({ children, fallback }) {
  const { user } = React.useContext(Context);
  if (user) return children;
  else return <Redirect to={fallback} />;
}

export default AuthOnly;
