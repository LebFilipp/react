import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [autor, setAutor] = useState('');
 

  function id(array) {
    return array.length ? array[array.length - 1].id + 1 : 0; 
  }

  const addMessage = () => {
    const messageItem = {
      text: message,
      autor: autor,
      id: id(messageList),
    }
    if(message && autor) {
      setMessageList([...messageList, messageItem])
      setMessage('')
      setAutor('')
    }
  }



  // const botAnswer = () => {
  //   const lastMessage = messageList[messageList - 1];
  //   if (lastMessage && lastMessage.autor) {
  //     setMessageList( messageList => [...messageList, {
  //       id: id(messageList),
  //       text: 'sent'
  //     }])
  //   }
    
  // }




  return (
  <div className="app-component">


    <div className="wrapper">
        
        <TextField
          style={{
            color: 'black',
            borderRadius: '5px',
            marginBottom: '30px'
          }}
          required
          id="outlined-required"
          label="Your name"
          Value={autor}
          onChange={(event) => setAutor(event.target.value)}

        />

        {/* <input value={autor} 
          onChange={(event) => setAutor(event.target.value)} 
          placeholder='Your name'/> */}

        <TextField
        style={{
          width: '222px',
          color: 'black',
          borderRadius: '5px',
          marginBottom: '30px',
        }}
          id="outlined-textarea"
          label="Your message..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Your message..."
          multiline
        />
        {/* <textarea value={message} 
          onChange={(event) => setMessage(event.target.value)} 
          placeholder='Your message...'/> */}

        <Button variant="contained" onClick={addMessage} style={{marginBottom: '20px'}}>Send</Button>

        {messageList.map((el) => {
          return(
          <div className="message-wrapper" key={el.id}>
            <p>{el.text}</p>
            <span className="from">от {el.autor}</span>
          </div>
        )})}
    </div>
  </div>);
}

export default App;
