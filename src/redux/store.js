// import messageREDUCER from "./messageREDUCER";
// import postREDUCER from "./postREDUCER";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
// const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

// let store = {
//     _state : {

//         myPostData: [
//             { id: 1, message: "First post", iconLike: 12 },
//             { id: 2, message: "Second post", iconLike: 15 },
//             { id: 3, message: "Third post", iconLike: 23 }
//         ],
    
//         newPostText: 'Write new post',
    
//         dialogData: [
//             { id: 1, name: 'Oleksandr' },
//             { id: 2, name: 'Bohdan' },
//             { id: 3, name: 'Juliya' }
//         ],
    
//         messageData: [
//             { id: 1, message: 'Hi, how are you?' },
//             { id: 2, message: 'Hello, when you will come to me?' },
//             { id: 3, message: 'Hi, what time is it now?' }
//         ],
    
//         newMessageDialogs: 'write here'
//     },
//     _callSubscriber () {
//         console.log('State changed');
//     },
//     // ____________________

//     getState() {
//         return this._state;
//     },
//     subscribe (observer) {
//         this._callSubscriber = observer;
//     },
//     // ____________________

//     // addPost () {
//     //     let newPost = {
//     //         id: 4,
//     //         message: this._state.newPostText,
//     //         iconLike: 0
//     //     }; 
//     //     if (this._state.newPostText !== '') {
//     //         this._state.myPostData.push(newPost);
//     //         this._state.newPostText = '';
//     //         this._callSubscriber(this._state);
//     //     }
//     // },
//     // updateNewPostText (newText) {
//     //     this._state.newPostText = newText;
//     //     this._callSubscriber(this._state);
//     // },
//     // ____________________

//     // addNewMessage () {
//     //     let newMessage = {
//     //         id: 4,
//     //         message: this._state.newMessageDialogs,
//     //     }; 
//     //     if ( this._state.newMessageDialogs !== '') {
//     //         this._state.messageData.push(newMessage);
//     //         this._state.newMessageDialogs = '';
//     //         this._callSubscriber(this._state);
//     //     }
        
//     // },

//     // updateNewMessage (newMessageItem) {
//     //     this._state.newMessageDialogs = newMessageItem;
//     //     this._callSubscriber(this._state);
//     // },

//     dispatch (action) { 

//        this._state =  postREDUCER(this._state, action);
//        this._state =  messageREDUCER(this._state, action);

//        this._callSubscriber(this._state);


//         // if (action.type === ADD_POST) {
//         //     let newPost = {
//         //         id: 4,
//         //         message: this._state.newPostText,
//         //         iconLike: 0
//         //     }; 
//         //     if (this._state.newPostText !== '') {
//         //         this._state.myPostData.push(newPost);
//         //         this._state.newPostText = '';
//         //         this._callSubscriber(this._state);
//         //     }
//         // } 
        
//         // else if (action.type === UPDATE_NEW_POST_TEXT) {
//         //     this._state.newPostText = action.newText;
//         //     this._callSubscriber(this._state);
//         // } 
        
//         // else if (action.type === ADD_NEW_MESSAGE) {
//         //     let newMessage = {
//         //         id: 4,
//         //         message: this._state.newMessageDialogs,
//         //     }; 
//         //     if ( this._state.newMessageDialogs !== '') {
//         //         this._state.messageData.push(newMessage);
//         //         this._state.newMessageDialogs = '';
//         //         this._callSubscriber(this._state);
//         //     }
//         // } 

//         // else if (action.type === UPDATE_NEW_MESSAGE) {
//         //     this._state.newMessageDialogs = action.newMessageItem;
//         //     this._callSubscriber(this._state);
//         // }
//     }  
// };

// export const addPostActionCreator = () => ({type: ADD_POST});

// //or another way or simple 

// export  const updateNewPostActionCreator = (text) => 
//     ({ type: UPDATE_NEW_POST_TEXT, newText: text });

// export const addNewMesageActionCreator = () => {
//         return {type: ADD_NEW_MESSAGE};
//     };

// export const onMessageActionCreator = (text) => {
//         return { type: UPDATE_NEW_MESSAGE,
//                  newMessageItem: text};
//     }

// export default store;

// window.store =store;