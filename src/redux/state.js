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


//_______________________________________________________________________________


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