import React from 'react';

import CategoryDot from '../../../../components/CategoryDot';
import './CategoryCTA.scss';

function CategoryCTA({ title, duration, color, active }) {
  const activeClassName = active ? 'active' : '';
  return (
    <div className={`category-cta ${activeClassName}`}>
      <CategoryDot active={active} size={32} color={color} />
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
