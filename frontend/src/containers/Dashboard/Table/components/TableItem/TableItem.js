import React from "react";
import Dayjs from "dayjs";

import CheckBox from "../../../../../components/Checkbox";
import CategoryDot from "../../../../../components/CategoryDot";

import "./TableItem.scss";
import Context from "../../../../../components/Context";

function TableItem({ title, subject, senderName, categoryId, status, date }) {
  const { categories } = React.useContext(Context);

  const category =
    categories.find(category => category._id === categoryId) || {};
  const { duration } = category;

  const currentDate = Dayjs();
  const timeElapsed = currentDate.diff(date, "second");
  const timeRemaining = (duration - timeElapsed) / 60;
  var timeRemainingText = "";

  const [categoryClicked, setCategoryClicked] = React.useState(false);
  const hideActiveDot = categoryClicked ? 'tableItem-column-labelsContainer-titleContainer-hide-current' : '';

  if (timeRemaining < 1 && timeRemaining > 0) {
    timeRemainingText = "One Minutes Remaining";
  } else if (timeRemaining < 0) {
    timeRemainingText = "Time's Up !!";
  } else if (timeRemaining) {
    timeRemainingText = timeRemaining + " Minutes Remaining";
  }

  return (
    <div className="tableItem">
      <div className="tableItem-column lhs">
        <CheckBox className="tableItem-column-accessory" />
        <div className="tableItem-column-labelsContainer">
          <div className={`tableItem-column-labelsContainer-titleContainer ${hideActiveDot}`}>
            {/* Category Dot */}
            <CategoryDot
              color={category.color}
              className={`tableItem-column-labelsContainer-titleContainer-category`}
              onClick={() => {
                if (categories.length) {
                  setCategoryClicked(!categoryClicked)
                }                
              }}
            />
            <div
              className={`tableItem-column-labelsContainer-titleContainer-categoryDots`}>
              {categories.map((categoryItem, i) => {
                let className = "tableItem-column-labelsContainer-titleContainer-category";

                if (categoryItem.color === category.color) {
                  className = "tableItem-column-labelsContainer-titleContainer-category tableItem-column-labelsContainer-titleContainer-category-active";
                }
                return (
                  <CategoryDot
                    className={className}
                    selected={categoryClicked}
                    color={categoryItem.color}
                    onClick={() => setCategoryClicked(!categoryClicked)}
                  />
                )
              })}
            </div>
            {/* Email Title */}
            <div className="tableItem-column-labelsContainer-titleContainer-title">
              {title}
            </div>
          </div>
          {/* Concatinate SenderName: Email Subject */}
          <div className="tableItem-column-labelsContainer-subject">
            {subject}
          </div>
        </div>
      </div>

      <div className="tableItem-column rhs">
        {/* Status Copy */}
        <div className="tableItem-column-status">{status}</div>
        {/* SLA Time Remaining Copy */}
        <div className="tableItem-column-remainingTime">
          {timeRemainingText}
        </div>
      </div>
    </div>
  );
}
export default TableItem;
