import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ADD_MESSAGES, DELETE_MESSAGES } from '../Redux/Actions/actionsTypes'
import { messagesSelector } from '../Redux/Reducers/MessageReducer/selectors'

const ReduxMessages = () => {
    const {idd} = useParams();
    const [title, setTitle] = useState('')
    const dispath = useDispatch()
    const chatMessage = useSelector(messagesSelector);

    const message = chatMessage.filter((message) => {
        if(!idd) return true;

        return message.chatId === Number(idd)
    })

    const addMessage = () => {
        const random = Math.random()
        const obj = {
            id: random,
            chatId: idd,
            title: title,
        }
        dispath({type: ADD_MESSAGES, payload: obj})
    }

    const deleteMessage = (id) => {
        dispath({type: DELETE_MESSAGES, payload: id})
    }

  return (
    <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)}/>
        <button onClick={addMessage}>Add</button>
      {message.map((item) => (
          <div key={item.id}>
              <div>{item.title}</div>
              <div><button onClick={deleteMessage(item.id)}>X</button></div>
          </div>
      ))}
    </div>
  )
}

export default ReduxMessages
