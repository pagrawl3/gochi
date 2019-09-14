import React from 'react';
import './Label.scss';

function Label({ src, title }) {
  return (
    <div className="label">
      <img alt="label-icon" src={src} className="label-icon" />
      <div className="label-title">{title}</div>
    </div>
  );
}

export default Label;
