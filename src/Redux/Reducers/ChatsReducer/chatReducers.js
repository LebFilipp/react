const initialState = {
    chats: [
        {
            id: 1,
            name: 'Filipp',
        },
        {
            id: 2,
            name: 'Andry',
        }
    ]
}

export const chatReducers = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state
    }
}