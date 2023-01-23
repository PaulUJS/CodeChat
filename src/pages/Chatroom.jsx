import React from 'react';

import MessageList from '../components/MessageList';
import MessageForm from '../forms/MessageForm';

function Chatroom() {
	return (
		<>
			<MessageList/>
			<MessageForm/>
		</>
	)
}

export default Chatroom