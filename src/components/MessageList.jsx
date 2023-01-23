import React, { useContext } from 'react';
import {Context} from '../context/MessageContext';

import Messages from './Messages';

function MessageList() {
	const { message, setMessage } = useContext(Context);
	if (message.length > 0) {
    return (
      message.map(msg => {
        return (
          <Messages msg={msg}/>
        )
      })
    )
  } else {
    return (
      <div>
        No messages yet
      </div>
    )
  }
}

export default MessageList