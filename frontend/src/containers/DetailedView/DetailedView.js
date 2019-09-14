import React from 'react';
import './DetailedView.scss';

import CrossButton from '../../icons/cross.svg';
import Context from '../../components/Context';
import EmailHeader from './components/EmailHeader';
import EmailBody from './components/EmailBody';
import CategoryCTA from './components/CategoryCTA';

function DetailedView() {
  const { setState, categories, emailOpen: active } = React.useContext(Context);
  const activeClassName = active ? 'active' : '';
  return (
    <div className={`detailed-view ${activeClassName}`}>
      <div className="detailed-view-overlay" />
      <div className="detailed-view-body">
        <div onClick={() => setState({ emailOpen: false })} className="detailed-view-body-cross">
          <img src={CrossButton} alt="" />
        </div>
        <div className="detailed-view-body-content">
          <EmailHeader />
          <EmailBody />
        </div>
        <div className="detailed-view-body-ctas">
          {categories.map((category, i) => (
            <CategoryCTA
              key={category._id}
              active={i === 0}
              title={category.title}
              color={category.color}
              duration={category.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailedView;
