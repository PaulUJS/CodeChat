import React, { useContext, useRef } from 'react'
import {Context} from '../context/MessageContext';

function MessageForm() {
	const {message, setMessage} = useContext(Context);
	const msgRef = useRef(null);

	const sendMsg = (e) => {
    e.preventDefault();
		const msg = msgRef.current.value;
		setMessage([...message, msg]);
    msgRef.current.value = null;
	}

  return (
    <form onSubmit={sendMsg}>
			<input ref={msgRef} />
			<button type='submit'>Send</button>
		</form>
  )
}

export default MessageForm