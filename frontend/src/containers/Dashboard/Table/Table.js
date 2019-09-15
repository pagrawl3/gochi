import React from 'react';
import Dayjs from 'dayjs';
import './Table.scss';

import './components/TableItem';
import TableItem from './components/TableItem';

function getCategory(email, categories) {
  return categories.find(category => category._id === email.category) || {};
}

function Table({ emails, categories }) {
  var timeRemainingArray = [];
  emails.forEach(email => {
    const currentDate = Dayjs();
    const timeElapsed = currentDate.diff(email.date, 'second');
    console.log('time elapsed: ' + timeElapsed);
    timeRemainingArray[email._id] = (getCategory(email, categories).duration - timeElapsed) / 60;
  });

  const sortedEmails = emails.sort((a, b) => {
    const aTime = timeRemainingArray[a._id];
    const bTime = timeRemainingArray[b._id];
    return aTime - bTime;
  });

  return (
    <div className="table">
      {sortedEmails.map((item, index) => (
        <TableItem
          title={item.subject}
          subject={item.snippet}
          senderName={item.from}
          resolved={item.resolved}
          status={item.status || ''}
          timeRemaining={timeRemainingArray[item._id]}
          category={getCategory(item, categories)}
          categories={categories}
          id={item._id}
        />
      ))}
    </div>
  );
}

Table.defaultProps = {
  emails: [],
  categories: []
};

export default Table;
