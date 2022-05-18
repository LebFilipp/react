import React, { useState } from 'react'



const Chats = () => {
  const [chatName, setChatName] = useState('')
  const [chatList, setChatList] = useState([
    {
      id: 1,
      name: 'alex',
    },
    {
      id: 2,
      name: 'andry',
    },
    {
      id: 1,
      name: 'filipp',
    },
  ])

  // function id(array) {
  //   return array.length ? array[array.length - 1].id + 1 : 0; 
  // }

  const addChat = () => {
    let id = Math.random()
    if (chatName) {
      setChatList( prevState => [...prevState, {
        id: id,
        name: chatName,
      }] )
    }
    setChatName('')
  }

  const deleteChat = (id) => {
    let newValue = chatList.filter((item) => item.id !== id)
    setChatList(newValue)
  }


  return (
    <>
      <input name={chatName} value={chatName} onChange={(e) => setChatName(e.target.value)} />
      <button onClick={addChat} >Add chat</button>
      <div>
        {chatList.map((e) => {
          return (
            <div key={e.id}>
              <span>{e.name}</span>
              <button onClick={() => deleteChat(e.id)}>X</button>
            </div>
          )
        })}
      </div>
    </>
  ) 
}

export default Chats
