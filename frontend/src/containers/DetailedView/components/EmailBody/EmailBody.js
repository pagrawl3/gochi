import React from 'react';
import './EmailBody.scss';

function EmailBody({ children }) {
  return (
    <div className="email-body">
      <div className="email-body-content" dangerouslySetInnerHTML={{ __html: children }} />
    </div>
  );
}

EmailBody.defaultProps = {
  children: ``
};

export default EmailBody;
