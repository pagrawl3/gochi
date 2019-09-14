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
  children: `
  Hi, 
  <br/><br/>
  Reassign chat on 'My Chats' page is currently available to all permission groups with access to Athena Chat. However, we have received a request from clients that they would like to hide this option for agents.
  <br/><br/>
  Making 'Reassign Chat' on My chats page as a feature would be helpful as then it can be customized according to permission groups.
  <br/><br/>
  Thank you,
  With Regards
  Haptik Inc.
  <br/><br/>
  Suraj Iyer
  Assistant Manager - Customer Success
  Haptik - We Get It Done
  M: 7303629620
  <br/><br/>
  Haptik enters a strategic partnership with Reliance Jio. Learn more about it here: http://bit.ly/2OImd4v
  <br/><br/>
  awards.png
  CONFIDENTIALITY NOTE: The information transmitted, including attachments, is intended only for the person(s) or entity to which it is addressed and may contain confidential and/or privileged material. Any review, retransmission, dissemination or other use or taking of any action in reliance upon this information by persons or entities other than the intended recipient is prohibited. If you received this in error, please contact the sender and destroy any copies of this information.
  `
};

export default EmailBody;
