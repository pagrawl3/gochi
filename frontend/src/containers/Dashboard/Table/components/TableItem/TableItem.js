import React from "react";
import Dayjs from "dayjs";

import "./TableItem.scss";
import Context from "../../../../../components/Context";

function TableItem({ title, subject, senderName, categoryId, status, date }) {
  const { categories } = React.useContext(Context);

  const category = categories.find(category => category._id === categoryId);
  const { color, duration } = category || {};

  const currentDate = Dayjs();
  const timeElapsed = currentDate.diff(date, "second");
  const timeRemaining = (duration - timeElapsed) / 60;
  var timeRemainingText = "";

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
        <div className="tableItem-column-accessory"></div>
        <div className="tableItem-column-labelsContainer">
          <div className="tableItem-column-labelsContainer-titleContainer">
            {/* Category Dot */}
            <div className="tableItem-column-labelsContainer-titleContainer-category"></div>
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
