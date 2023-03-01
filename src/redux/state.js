<<<<<<< HEAD
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_NEW_MESSAGE = 'ADD-NEW-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {
    _state : {

        myPostData: [
            { id: 1, message: "First post", iconLike: 12 },
            { id: 2, message: "Second post", iconLike: 15 },
            { id: 3, message: "Third post", iconLike: 23 }
        ],
    
        newPostText: 'Write new post',
    
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
    },
    _callSubscriber () {
        console.log('State chnged');
    },
    // ____________________

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    // ____________________

    // addPost () {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.newPostText,
    //         iconLike: 0
    //     }; 
    //     if (this._state.newPostText !== '') {
    //         this._state.myPostData.push(newPost);
    //         this._state.newPostText = '';
    //         this._callSubscriber(this._state);
    //     }
    // },
    // updateNewPostText (newText) {
    //     this._state.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // ____________________

    // addNewMessage () {
    //     let newMessage = {
    //         id: 4,
    //         message: this._state.newMessageDialogs,
    //     }; 
    //     if ( this._state.newMessageDialogs !== '') {
    //         this._state.messageData.push(newMessage);
    //         this._state.newMessageDialogs = '';
    //         this._callSubscriber(this._state);
    //     }
        
    // },

    // updateNewMessage (newMessageItem) {
    //     this._state.newMessageDialogs = newMessageItem;
    //     this._callSubscriber(this._state);
    // },

    dispatch (action) { //{ type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.newPostText,
                iconLike: 0
            }; 
            if (this._state.newPostText !== '') {
                this._state.myPostData.push(newPost);
                this._state.newPostText = '';
                this._callSubscriber(this._state);
            }
        } 
        
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.newPostText = action.newText;
            this._callSubscriber(this._state);
        } 
        
        else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 4,
                message: this._state.newMessageDialogs,
            }; 
            if ( this._state.newMessageDialogs !== '') {
                this._state.messageData.push(newMessage);
                this._state.newMessageDialogs = '';
                this._callSubscriber(this._state);
            }
        } 

        else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.newMessageDialogs = action.newMessageItem;
            this._callSubscriber(this._state);
        }
    }  
};

export const addPostActionCreator = () => ({type: ADD_POST});
=======
let store = {
    _state: {
        myPostData: [{
                id: 1,
                message: "First post",
                iconLike: 12
            },
            {
                id: 2,
                message: "Second post",
                iconLike: 15
            },
            {
                id: 3,
                message: "Third post",
                iconLike: 23
            }
        ],
        newPostText: 'New post',
        dialogData: [{
                id: 1,
                name: 'Oleksandr'
            },
            {
                id: 2,
                name: 'Bohdan'
            },
            {
                id: 3,
                name: 'Juliya'
            }
        ],
        messageData: [{
                id: 1,
                message: 'Hi, how are you?'
            },
            {
                id: 2,
                message: 'Hello, when you will come to me?'
            },
            {
                id: 3,
                message: 'Hi, what time is it now?'
            }
        ],
        newMessageDialogs: 'write here'
    },
    getState() {
        return this._state;
    },
    
    _callSubscriber() {
        console.log('State chnged');
    },
    
    addPost() {
        let newPost = {
            id: 4,
            message:  this._state.newPostText,
            iconLike: 0
        };
        if ( this._state.newPostText !== '') {
            this._state.myPostData.push(newPost);
            this._state.newPostText = '';
            this._callSubscriber( this._state);
        }
    },
    
    updateNewPostText(newText) {
        this._state.newPostText = newText;
        this._callSubscriber(this._state);
    },

    
    addNewMessage() {
        let newMessage = {
            id: 4,
            message: this._state.newMessageDialogs,
        };
        if (this._state.newMessageDialogs !== '') {
            this._state.messageData.push(newMessage);
            this._state.newMessageDialogs = '';
            this._callSubscriber(this._state);
        }
    },
    
    updateNewMessage(newMessageItem) {
        this._state.newMessageDialogs = newMessageItem;
        this._callSubscriber(this._state);
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    }
};

export default store;

// window.store = store;
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236

//or another way or simple 

<<<<<<< HEAD
export  const updateNewPostActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });
=======
//_______________________________________________________________________________
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236

export const addNewMesageActionCreator = () => {
        return {type: ADD_NEW_MESSAGE};
    };

<<<<<<< HEAD
export const onMessageActionCreator = (text) => {
        return { type: UPDATE_NEW_MESSAGE,
                 newMessageItem: text};
    }

export default store;

window.store =store;
=======
// let rerenderEntireTree = () => {
//     console.log('State chnged');
// }

// let state = {
//     myPostData: [{
//             id: 1,
//             message: "First post",
//             iconLike: 12
//         },
//         {
//             id: 2,
//             message: "Second post",
//             iconLike: 15
//         },
//         {
//             id: 3,
//             message: "Third post",
//             iconLike: 23
//         }
//     ],

//     newPostText: 'New post',

//     dialogData: [{
//             id: 1,
//             name: 'Oleksandr'
//         },
//         {
//             id: 2,
//             name: 'Bohdan'
//         },
//         {
//             id: 3,
//             name: 'Juliya'
//         }
//     ],
//     messageData: [{
//             id: 1,
//             message: 'Hi, how are you?'
//         },
//         {
//             id: 2,
//             message: 'Hello, when you will come to me?'
//         },
//         {
//             id: 3,
//             message: 'Hi, what time is it now?'
//         }
//     ],
//     newMessageDialogs: 'write here'
// };

// export const addPost = () => {
//     let newPost = {
//         id: 4,
//         message: state.newPostText,
//         iconLike: 0
//     };
//     if (state.newPostText !== '') {
//         state.myPostData.push(newPost);
//         state.newPostText = '';
//         rerenderEntireTree(state);
//     }
// };

// export const addNewMessage = () => {
//     let newMessage = {
//         id: 4,
//         message: state.newMessageDialogs,
//     };
//     if (state.newMessageDialogs !== '') {
//         state.messageData.push(newMessage);
//         state.newMessageDialogs = '';
//         rerenderEntireTree(state);
//     }
// };

// export const updateNewPostText = (newText) => {
//     state.newPostText = newText;
//     rerenderEntireTree(state);
// };
// export const updateNewMessage = (newMessageItem) => {
//     state.newMessageDialogs = newMessageItem;
//     rerenderEntireTree(state);
// };

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// };

// export default state;
// window.state = state;

// store 

// let store = {
//     state: {
//         myPostData: [{
//                 id: 1,
//                 message: "First post",
//                 iconLike: 12
//             },
//             {
//                 id: 2,
//                 message: "Second post",
//                 iconLike: 15
//             },
//             {
//                 id: 3,
//                 message: "Third post",
//                 iconLike: 23
//             }
//         ],
    
//         newPostText: 'New post',
    
//         dialogData: [{
//                 id: 1,
//                 name: 'Oleksandr'
//             },
//             {
//                 id: 2,
//                 name: 'Bohdan'
//             },
//             {
//                 id: 3,
//                 name: 'Juliya'
//             }
//         ],
//         messageData: [{
//                 id: 1,
//                 message: 'Hi, how are you?'
//             },
//             {
//                 id: 2,
//                 message: 'Hello, when you will come to me?'
//             },
//             {
//                 id: 3,
//                 message: 'Hi, what time is it now?'
//             }
//         ],
//         newMessageDialogs: 'write here'
//     },
//      addPost : () => {
//         let newPost = {
//             id: 4,
//             message: state.newPostText,
//             iconLike: 0
//         };
//         if (this.state.newPostText !== '') {
//             this.state.myPostData.push(newPost);
//             this.state.newPostText = '';
//             this.rerenderEntireTree(this.state);
//         }
//     },
//     addNewMessage: () => {
//         let newMessage = {
//             id: 4,
//             message: this.state.newMessageDialogs,
//         };
//         if (this.state.newMessageDialogs !== '') {
//             this.state.messageData.push(newMessage);
//             this.state.newMessageDialogs = '';
//             this.rerenderEntireTree(this.state);
//         }
//     },
//     updateNewPostText: (newText) => {
//         this.state.newPostText = newText;
//         this.rerenderEntireTree(this.state);
//     },
//     updateNewMessage: (newMessageItem) => {
//         this.state.newMessageDialogs = newMessageItem;
//         this.rerenderEntireTree(this.state);
//     },
//     rerenderEntireTre: () => {
//         console.log('State chnged');
//     },
//     subscribe: (observer) => {
//         this.rerenderEntireTree = observer;
//     }

// };


// export default store;
>>>>>>> b42e1d0a6c18f3bdf6b0b14feb86bfc1ca18d236
