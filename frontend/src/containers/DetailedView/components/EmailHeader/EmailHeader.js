import React from 'react';
import './EmailHeader.scss';

import Checkbox from '../../../../components/Checkbox';
import Label from '../../../../components/Label';

function EmailHeader({ title, resolved }) {
  let resolvedClass = resolved ? 'email-header-checkbox-active' : '';
  return (
    <div className="email-header">
      <Checkbox size={18} className={`email-header-checkbox ${resolvedClass}`} />
      <div className="email-header-text">
        <div className="email-header-text-title">{title}</div>
        <div className="email-header-text-subtitle">
          <Label src="user-icon" title="Suraj Iyer<suraj.iyer@haptik.co>" />
          <Label src="empty-tag" title="NO TAG ASSIGNED" />
        </div>
      </div>
    </div>
  );
}

EmailHeader.defaultProps = {
  title: 'Feature Request <> Reassign Chats as feature in permissions',
  resolved: false,
};

export default EmailHeader;
