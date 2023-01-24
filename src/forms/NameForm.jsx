import React, { useRef, useContext } from 'react';
import { over } from 'stompjs';
import SockJS from 'sockjs-client';

import { Context } from '../context/UserContext';
import { Context as PublicContext } from '../context/PublicContext';
import { Context as PrivateContext } from '../context/PrivateContext';

function NameForm() {
  const {userData, setUserData} = useContext(Context);
  const {publicChat, setPublicChat} = useContext(PublicContext);
  const {privateChat, setPrivateChat} = useContext(PrivateContext);

  const nameRef = useRef(null);

  const handleAddName = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;

    setUserData({...userData, "username": name});
    nameRef.current.value = null;
  }

  const registerUser = () => {
    const Sock = new SockJS('http::/localhost:8080/ws');
    stompClient = over(Sock);
    stompClient.connect({}, onConnect, onError);
  }

  const onConnect = () => {
    setUserData({...userData, 'connected': true});
    stompClient.subscribe('/chatroom/public', onPublicMessageRecieved);
    stompClient.subscribe(`/user/${userData.username}/private`, onPrivateMessageRecieved);
  }

  const onPublicMessageRecieved = (payload) => {
    const payloadData = JSON.parse(payload.body);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChat.get(payloadData.senderName)) {
          privateChat.get(payloadData.senderName, []);
          setPrivateChat(new Map(privateChat));
        }
        break;
      case "MESSAGE":
        publicChat.push(payloadData);
        setPublicChat([...publicChat]);
        break;
      
    }
  }
  const onPrivateMessageRecieved = (payload) => {
    const payloadData = JSON.parse(payload);
    if (privateChat.get(payloadData.senderName)) {
      privateChat.get(payloadData.senderName).push(payloadData);
      setPrivateChat(new Map(privateChat));
    } else {
      const payloadArr = [];
      payloadArr.push(payloadData);
      privateChat.get(payloadData.senderName, payloadArr);
      setPrivateChat(new Map(privateChat));
    }
  }

  const onError = (err) => {
    console.log(err);
  }

  return (
    <form onSubmit={handleAddName}>
      <label>Choose a name: </label>
      <input ref={nameRef} />
      <button type='submit'>Chat</button>
    </form>
  )
}

export default NameForm