import React from 'react';
import './CategoryDot.scss';

function CategoryDot({ color, size = 12, className, active }) {
  const activeClassName = active ? 'active' : '';
  return (
    <div
      style={{ backgroundColor: color, width: size, height: size }}
      className={`category-dot ${activeClassName} ${className}`}
    />
  );
}

export default CategoryDot;
