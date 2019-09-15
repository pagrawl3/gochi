import React from 'react';
import Dayjs from 'dayjs';

import './EmailHeader.scss';

import Checkbox from '../../../../components/Checkbox';
import Label from '../../../../components/Label';

function EmailHeader({ subject, from, date, resolved }) {
  let resolvedClass = resolved ? 'email-header-checkbox-active' : '';
  return (
    <div className="email-header">
      <Checkbox size={18} className={`email-header-checkbox ${resolvedClass}`} />
      <div className="email-header-text">
        <div className="email-header-text-title">{subject}</div>
        <div className="email-header-text-subtitle">
          <Label src="user-icon" title={from} />
          <Label src="empty-tag" title={Dayjs(date).format('DD/MM/YYYY hh:mm A')} />
        </div>
      </div>
    </div>
  );
}

EmailHeader.defaultProps = {
  title: 'Feature Request <> Reassign Chats as feature in permissions',
  resolved: false
};

export default EmailHeader;
