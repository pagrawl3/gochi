import React from 'react';
import './EmailHeader.scss';

import Checkbox from '../../../../components/Checkbox';
import Label from '../../../../components/Label';

function EmailHeader({ title }) {
  return (
    <div className="email-header">
      <Checkbox />
      <div className="email-text">
        <div className="email-text-title">{title}</div>
        <div className="email-text-subtitle">
          <Label src="user-icon" title="Suraj Iyer<suraj.iyer@haptik.co>" />
          <Label src="empty-tag" title="NO TAG ASSIGNED" />
        </div>
      </div>
    </div>
  );
}

export default EmailHeader;
