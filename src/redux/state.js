let store = {
    _state : {

        myPostData: [
            { id: 1, message: "First post", iconLike: 12 },
            { id: 2, message: "Second post", iconLike: 15 },
            { id: 3, message: "Third post", iconLike: 23 }
        ],
    
        newPostText: 'write your new post here',
    
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
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('State chnged');
    },
    
    addPost () {
        let newPost = {
            id: 4,
            message: this._state.newPostText,
            iconLike: 0
        }; 
        this._state.myPostData.push(newPost);
        this._state.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText (newText) {
        this._state.newPostText = newText;
        this._callSubscriber(this._state);
    },

    addNewMessage () {
        let newMessage = {
            id: 4,
            message: this._state.newMessageDialogs,
        }; 
        this._state.messageData.push(newMessage);
        this._state.newMessageDialogs = '';
        this._callSubscriber(this._state);
    },

    updateNewMessage (newMessageItem) {
        this._state.newMessageDialogs = newMessageItem;
        this._callSubscriber(this._state);
    },

    subscribe (observer) {
        this._callSubscriber = observer;
    },

};


export default store;
window.store =store;