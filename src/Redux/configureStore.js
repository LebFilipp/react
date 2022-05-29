import {combineReducers, createStore} from "redux";

import { chatReducers } from "./Reducers/ChatsReducer/chatReducers";
import { messagesReducers } from "./Reducers/MessageReducer/messagesReducers";

export const store = createStore(combineReducers({
    chats: chatReducers,
    messages: messagesReducers,
}))