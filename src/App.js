import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import ChatList from "./Component/ChatList";


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: 'aqua',
//     },

//     secondary: {
//       main: 'aquamarine',
//     }
//   }
// })

function App() {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [autor, setAutor] = useState('');


  const addMessage = () => {
    let id = Math.random()
    if(message !=='' && autor !=='') {
      setMessageList([...messageList, {
        text: message,
        autor: autor,
        id: id,
      }])
      setMessage('')
      setAutor('')
    }
  }
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     if(messageList.length !== 0) {
  //       alert('сообщение отправлено');
  //     }
  //   }, 1500)
  // }, [messageList]);

  return (
  <div className="app-component">
    <ChatList/>

    <div className="wrapper">
        
        <TextField
          style={{
            backgroundColor: 'aqua',
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
          backgroundColor: 'aqua',
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
