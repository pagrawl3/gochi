import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

const Provider = ({ children, value = {} }) => {
  const [state, setStateObject] = React.useState(value);
  const setValue = (key, value) => {
    setStateObject({ ...state, [key]: value });
  };

  const setState = object => {
    setStateObject({ ...state, ...object });
  };

  return <Context.Provider value={{ ...state, setValue, setState }}>{children}</Context.Provider>;
};

Provider.propTypes = {
  children: PropTypes.node,
  value: PropTypes.shape({})
};

export default Provider;
