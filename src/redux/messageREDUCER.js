const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const messageREDUCER = (state, action) => {


     if (action.type === ADD_NEW_MESSAGE) {

        let newMessage = {
            id: 4,
            message: state.newMessageDialogs,
        }; 

        if ( state.newMessageDialogs !== '') {
            state.messageData.push(newMessage);
            state.newMessageDialogs = '';
            // this._callSubscriber(this._state);
        }
    } 
    else if (action.type === UPDATE_NEW_MESSAGE) {
        state.newMessageDialogs = action.newMessageItem;
        // this._callSubscriber(this._state);
    }
    return state;
};
