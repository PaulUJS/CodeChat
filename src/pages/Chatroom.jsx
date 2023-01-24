import React, { useContext } from 'react';
import { Context } from '../context/UserContext';

import MessageList from '../components/MessageList';
import MessageForm from '../forms/MessageForm';
import NameForm from '../forms/NameForm';

function Chatroom() {
  const {userData, setUserData} = useContext(Context);
	return (
		<>
			{userData.connected?
        <>
          <MessageList/>
          <MessageForm/>
        </>
        :
        <>
          <NameForm/>
        </>
      }
		</>
	)
}

export default Chatroom