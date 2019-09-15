import React from 'react';
import './CategoryDot.scss';

function CategoryDot({ color, size = 12, className, active, selected, onClick }) {
  const activeClassName = active ? 'active' : '';
  let style = {
    width: size,
    height: size,
    border: `2px dashed #DDD`
  };

  if (color === '#EF233C') {
    style = {
      backgroundColor: color,
      width: size,
      height: size,
      boxShadow: `0 1px 6px 0 rgba(239, 35, 60, 0.6)`
    };
  } else if (color === '#FFB63F') {
    style = {
      backgroundColor: color,
      width: size,
      height: size,
      boxShadow: `0 1px 6px 0 rgba(255,182,63, 0.6)`
    };
  } else if (color === '#2B2D42') {
    style = {
      backgroundColor: color,
      width: size,
      height: size,
      boxShadow: `0 1px 6px 0 rgba(43,45,66, 0.6)`
    };
  } else if (color === '#8D99AE') {
    style = {
      backgroundColor: color,
      width: size,
      height: size,
      boxShadow: `0 1px 6px 0 rgba(141,153,174, 0.6)`
    };
  }
  return <div style={style} className={`category-dot ${activeClassName} ${className}`} onClick={onClick} />;
}

export default CategoryDot;
