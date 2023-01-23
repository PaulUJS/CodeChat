import React, { useRef, useContext } from 'react'
import { Context } from '../context/NameContext';

function NameForm() {
  const  {name, setName} = useContext(Context);
  const nameRef = useRef(null);
  const chooseName = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    setName(name);
    nameRef.current.value = null;
  }
  return (
    <form>
      <label>Choose a name: </label>
      <input ref={nameRef} />
      <button type='submit'>Chat</button>
    </form>
  )
}

export default NameForm