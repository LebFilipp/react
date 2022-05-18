import { List, ListItem } from '@mui/material';
import React, { useState } from "react";
import './ChatList.css';

const ChatList = ( name, id ) => {
  let chatId = Math.random()

  const [chatList] = useState([
    { id: {chatId}, name: 'Ivan' },
    { id: {chatId}, name: 'Andry' },
    { id: {chatId}, name: 'Alex' },
    { id: {chatId}, name: 'Filipp' },
  ]);




  


  return (
    <div>
        <List  className='list'>
          {chatList.map((item) => {
            return(
              <ListItem className='list-item' id={item.id} key={item.id}>
                <span> {name = item.name}</span>
                <button>X</button>
              </ListItem>
            )
          })}
        </List>
    </div>
  )
}

export default ChatList
