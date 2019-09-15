import React from 'react';
import Dayjs from 'dayjs';

import './ReplyHeader.scss';

import Label from '../../../../components/Label';

function ReplyHeader({ from, date }) {
  return (
    <div className="reply-header">
      <Label src="user-icon" title={from} />
      <Label src="empty-tag" title={Dayjs(date).format('DD/MM/YYYY hh:mm A')} />
    </div>
  );
}

export default ReplyHeader;
