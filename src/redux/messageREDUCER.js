const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let  initialStateMess = {
    dialogData: [
        { id: 1, name: 'Oleksandr' },
        { id: 2, name: 'Bohdan' },
        { id: 3, name: 'Juliya' }
    ],

    messageData: [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Hello, when you will come to me?' },
        { id: 3, message: 'Hi, what time is it now?' }
    ],

    newMessageDialogs: 'write here'
};

const messageREDUCER = (state = initialStateMess, action) => {

    switch (action.type)  {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageDialogs,
            }; 
            state.messageData.push(newMessage);
            state.newMessageDialogs = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessageDialogs = action.newMessageItem;
            return state;

        default:
            return state;
        }
            
    
    //  if (action.type === ADD_NEW_MESSAGE) {

    //     let newMessage = {
    //         id: 4,
    //         message: state.newMessageDialogs,
    //     }; 

    //     if ( state.newMessageDialogs !== '') {
    //         state.messageData.push(newMessage);
    //         state.newMessageDialogs = '';
    //         // this._callSubscriber(this._state);
    //     }
    // } 
    // else if (action.type === UPDATE_NEW_MESSAGE) {
    //     state.newMessageDialogs = action.newMessageItem;
    //     // this._callSubscriber(this._state);
    // }
    // return state;
};
export const addNewMesageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE};
};

export const onMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE,
             newMessageItem: text};
}

export default messageREDUCER;
