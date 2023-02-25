

let rerenderEntireTree = () => {
    console.log('State chnged');
}

let state = {

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
};

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.newPostText,
        iconLike: 0
    }; 
    state.myPostData.push(newPost);
    state.newPostText = '';
    rerenderEntireTree(state);
};


export const addNewMessage = () => {
    let newMessage = {
        id: 4,
        message: state.newMessageDialogs,
    }; 
    state.messageData.push(newMessage);
    state.newMessageDialogs = '';
    rerenderEntireTree(state);
};


export const updateNewPostText = (newText) => {
    state.newPostText = newText;
    rerenderEntireTree(state);
};
export const updateNewMessage = (newMessageItem) => {
    state.newMessageDialogs = newMessageItem;
    rerenderEntireTree(state);
};

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
};

export default state;