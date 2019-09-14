import React from 'react';
import './DetailedView.scss';

import CrossButton from '../../icons/cross.svg';
import EmailHeader from './components/EmailHeader';
import EmailBody from './components/EmailBody';
import CategoryCTA from './components/CategoryCTA';

function DetailedView({ active, categories, onClose }) {
  const activeClassName = active ? 'active' : '';
  return (
    <div className={`detailed-view ${activeClassName}`}>
      <div className="detailed-view-overlay" />
      <div className="detailed-view-body">
        <div onClick={onClose} className="detailed-view-body-cross">
          <img src={CrossButton} alt="" />
        </div>
        <div className="detailed-view-body-content">
          <EmailHeader />
          <EmailBody />
        </div>
        <div className="detailed-view-body-ctas">
          {categories.map((category, i) => (
            <CategoryCTA active={i === 0} title={category.title} color={category.color} duration={category.duration} />
          ))}
        </div>
      </div>
    </div>
  );
}

DetailedView.defaultProps = {
  categories: [
    { title: 'High Priority Bug', color: '#EF233C', duration: 3600 },
    { title: 'Low Priority Bug', color: '#FFB63F', duration: 3600 * 12 },
    { title: 'Feature Request', color: '#2B2D42', duration: 3600 * 12 },
    { title: 'Doubt', color: '#8D99AE', duration: 3600 * 12 }
  ]
};

export default DetailedView;
