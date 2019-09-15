/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './DetailedView.scss';

import API from '../../api';
import CrossButton from '../../icons/cross.svg';
import Context from '../../components/Context';
import ReplyHeader from './components/ReplyHeader';
import EmailHeader from './components/EmailHeader';
import EmailBody from './components/EmailBody';
import CategoryCTA from './components/CategoryCTA';

function DetailedView() {
  const [email, setEmail] = React.useState({});
  const [replies, setReplies] = React.useState([]);
  const { setState, categories, emailOpen: active, currentEmailId: id } = React.useContext(Context);
  const activeClassName = active ? 'active' : '';

  const handleClose = React.useCallback(() => {
    setState({ emailOpen: false, currentEmailId: undefined });
    setEmail({});
  });

  React.useEffect(() => {
    API.getEmail(id)
      .then(data => {
        setEmail(data);
        return API.getReplies(data.threadId);
      })
      .then(data => {
        setReplies(data);
      });
  }, [id]);

  const { date, from, subject, textHtml, textPlain } = email;
  const body = textHtml || textPlain;
  return (
    <div className={`detailed-view ${activeClassName}`}>
      <div className="detailed-view-overlay" onClick={handleClose} />
      <div className="detailed-view-body">
        <div onClick={handleClose} className="detailed-view-body-cross">
          <img src={CrossButton} alt="" />
        </div>
        <div className="detailed-view-body-content">
          <EmailHeader subject={subject} from={from} date={date} />
          <EmailBody>{body}</EmailBody>
          {replies.map(() => (
            <>
              <ReplyHeader from={from} date={date} />
              <EmailBody>{body}</EmailBody>
            </>
          ))}
        </div>
        <div className="detailed-view-body-ctas">
          {categories.map((category, i) => (
            <CategoryCTA
              key={category._id}
              active={i === 0}
              title={category.title}
              color={category.color}
              duration={category.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailedView;
