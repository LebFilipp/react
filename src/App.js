import React, { useEffect, useState } from "react";
// import Message from "./Component/Message";
import './App.css';



function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [autor, setAutor] = useState('');

  const addMessage = () => {
    let id = Math.random()
    setMessageList([...messageList, {
      text: message,
      autor: autor,
      id: id,
    }])
  }
  
  useEffect(() => {
    setTimeout(() => {
      if(messageList.length !== 0) {
        alert('сообщение отправлено');
      }
    }, 1500)
  }, [messageList]);

  return (
    <div className="wrapper">
        <input value={autor} 
          onChange={(event) => setAutor(event.target.value)} 
          placeholder='Your name'/>

        <textarea value={message} 
          onChange={(event) => setMessage(event.target.value)} 
          placeholder='Your message...'/>

        <button onClick={addMessage}>send</button>

        {messageList.map((el) => {
          return(
          <div className="message-wrapper" key={el.id}>
            <p>{el.text}</p>
            <span>от {el.autor}</span>
          </div>
        )})}
    </div>

  );
}

export default App;
