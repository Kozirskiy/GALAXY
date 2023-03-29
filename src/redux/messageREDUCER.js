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

        newMessageDialogs: 'Your new message'
};



const messageREDUCER = (state = initialStateMess, action) => {

    switch (action.type)  {

    case UPDATE_NEW_MESSAGE:

           return {
                ...state,
                newMessageDialogs: action.newMessageText
             };

    case ADD_NEW_MESSAGE:
        let text = state.newMessageDialogs;
        return{
            ...state,
            newMessageDialogs: '',
            messageData: [...state.messageData, {id:4, message: text}]
        };
        
    default:
        return state;
    }

    //or like of previous version 

    // switch (action.type)  {

    //     case UPDATE_NEW_MESSAGE:  
    //         {
    //             let stateCopy = {...state}
    //             stateCopy.newMessageDialogs = {...state.newMessageDialogs};
    //             stateCopy.newMessageDialogs = action.newMessageText;
    //             return stateCopy;
    //         }
    //     case ADD_NEW_MESSAGE: 
    //     {
    //         let newMessage = {
    //             id: 4,
    //             message: state.newMessageDialogs,
    //         }; 
    
    //         let stateCopy = {...state};
    //         stateCopy.messageData = [...state.messageData];
    //         stateCopy.messageData.push(newMessage);
    //         stateCopy.newMessageDialogs = '';
    //         return stateCopy;
    //     }
    //     default:
    //         return state;
    //     }
};

                 
        
           

        
            
    
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
// };


export const addNewMesageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE};
};

export const onMessageActionCreator = (text) => {
    return { type: UPDATE_NEW_MESSAGE,
             newMessageText: text};
}

export default messageREDUCER;
