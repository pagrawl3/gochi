import React from 'react';

import CheckBox from '../../../../../components/Checkbox';
import CategoryDot from '../../../../../components/CategoryDot';

import './TableItem.scss';
import Context from '../../../../../components/Context';
import API from '../../../../../api';

function TableItem({ title, subject, senderName, category, status, timeRemaining, id, resolved: apiResolved }) {
  console.log('Time Remainin: ' + timeRemaining);

  const { categories, setState } = React.useContext(Context);
  const [resolved, setResolved] = React.useState(apiResolved);
  var timeRemainingText = '';

  const [categoryClicked, setCategoryClicked] = React.useState(false);
  const hideActiveDot = categoryClicked ? 'tableItem-column-labelsContainer-titleContainer-hide-current' : '';

  if (!timeRemaining) {
    timeRemainingText = 'Tag Needed';
  } else {
    if (timeRemaining < 1 && timeRemaining > 0) {
      timeRemainingText = 'One Minute Remaining';
    } else if (timeRemaining < 0) {
      timeRemainingText = "Time's Up !!";
    } else if (timeRemaining) {
      timeRemainingText = timeRemaining + ' Minutes Remaining';
    }
  }

  return (
    <div className="tableItem" onClick={() => setState({ currentEmailId: id, emailOpen: true })}>
      <div className="tableItem-column lhs">
        <CheckBox
          onClick={e => {
            e.stopPropagation();
            API.updateEmailStatus(id, !resolved);
            setResolved(!resolved);
          }}
          className={`tableItem-column-accessory ${resolved ? 'email-header-checkbox-active' : ''}`}
        />
        <div className="tableItem-column-labelsContainer">
          <div className={`tableItem-column-labelsContainer-titleContainer ${hideActiveDot}`}>
            {/* Category Dot */}
            <CategoryDot
              color={category.color}
              className={`tableItem-column-labelsContainer-titleContainer-category`}
              onClick={e => {
                if (categories.length) {
                  e.stopPropagation();
                  setCategoryClicked(!categoryClicked);
                }
              }}
            />
            <div className={`tableItem-column-labelsContainer-titleContainer-categoryDots`}>
              {categories.map((categoryItem, i) => {
                let className = 'tableItem-column-labelsContainer-titleContainer-category';

                if (categoryItem.color === category.color) {
                  className =
                    'tableItem-column-labelsContainer-titleContainer-category tableItem-column-labelsContainer-titleContainer-category-active';
                }
                return (
                  <CategoryDot
                    className={className}
                    selected={categoryClicked}
                    color={categoryItem.color}
                    onClick={e => {
                      e.stopPropagation();
                      console.log(categoryItem);
                      API.updateEmailCategory(id, categoryItem._id);
                      setCategoryClicked(!categoryClicked);
                    }}
                  />
                );
              })}
            </div>
            {/* Email Title */}
            <div className="tableItem-column-labelsContainer-titleContainer-title">{title}</div>
          </div>
          {/* Concatinate SenderName: Email Subject */}
          <div className="tableItem-column-labelsContainer-subject">{subject}</div>
        </div>
      </div>

      <div className="tableItem-column rhs">
        {/* Status Copy */}
        <div className="tableItem-column-status">{status}</div>
        {/* SLA Time Remaining Copy */}
        <div className="tableItem-column-remainingTime">{timeRemainingText}</div>
      </div>
    </div>
  );
}
export default TableItem;
