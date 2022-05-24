import { DELETE_MESSAGES, ADD_MESSAGES } from "../../Actions/actionsTypes"

const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            title: 'hello',
        },
        {
            id: 2,
            chatId: 2,
            title: 'hello',
        },
        {
            id: 3,
            chatId: 1,
            title: 'how are you?',
        },
        {
            id: 4,
            chatId: 2,
            title: 'Fine and you?',
        },
        {
            id: 5,
            chatId: 1,
            title: 'me too',
        },
    ]
}

export const messagesReducers = (state = initialState, action) => {
    switch (action.type) {

        case DELETE_MESSAGES:
            return {
                ...state,
                message: state.messages.filter(item => item.id !== action.payload)
            }
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}