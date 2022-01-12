import React from 'react';

import s from './../Message/Message.module.css';





const Message = (props) => {
  return (
    <div>
      {props.message}
    <div className={s.friendsMessage}>
        {props.message}
    </div>
    </div>
  )
}



export default Message;
