import React from "react";
import Dayjs from "dayjs";

import CheckBox from "../../../../../components/Checkbox";
import CategoryDot from "../../../../../components/CategoryDot";

import "./TableItem.scss";
import Context from "../../../../../components/Context";

function TableItem({ title, subject, senderName, categoryId, status, date }) {
  const { setState, categories } = React.useContext(Context);

  const category =
    categories.find(category => category._id === categoryId) || {};
  const { color, duration } = category;

  const currentDate = Dayjs();
  const timeElapsed = currentDate.diff(date, "second");
  const timeRemaining = (duration - timeElapsed) / 60;
  var timeRemainingText = "";

  var categoryClicked = false;
  const activeClassName = categoryClicked ? "active" : "";

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
          <div className="tableItem-column-labelsContainer-titleContainer">
            {/* Category Dot */}
            <CategoryDot
              color={category.color}
              className="tableItem-column-labelsContainer-titleContainer-category"
              onClick={() => setState({ categoryClicked: !categoryClicked })}
            />
            <div
              className={`tableItem-column-labelsContainer-titleContainer-categoryDots ${activeClassName}`}>
              {categories.map((categoryItem, i) => (
                <CategoryDot
                  selected={categoryClicked}
                  color={categoryItem.color}
                />
              ))}
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
