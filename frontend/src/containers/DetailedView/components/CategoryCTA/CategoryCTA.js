import React from 'react';
import './CategoryCTA.scss';

function CategoryCTA({ title, duration, color, active }) {
  const activeClassName = active ? 'active' : '';
  return (
    <div className={`category-cta ${activeClassName}`}>
      <div style={{ backgroundColor: color }} className="category-cta-icon" />
      <div className="category-cta-text">
        <div className="category-cta-text-title">{title}</div>
        <div className="category-cta-text-subtitle">
          SLA: {'<'}
          {duration / 60} hour(s)
        </div>
      </div>
    </div>
  );
}

export default CategoryCTA;
