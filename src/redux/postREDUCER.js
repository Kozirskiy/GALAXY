
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

 let initialStatePost = {
    myPostData: [
        { id: 1, message: "First post", iconLike: 12 },
        { id: 2, message: "Second post", iconLike: 15 },
        { id: 3, message: "Third post", iconLike: 23 }
    ],

    newPostText: 'Write new post'
};
const postREDUCER = (state = initialStatePost, action) => {

    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 4,
                message: state.newPostText,
                iconLike: 0
            }; 
            state.myPostData.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;

        default: 
            return state;
    }
    


    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 4,
    //         message: state.newPostText,
    //         iconLike: 0
    //     }; 
    //     if (state.newPostText !== '') {
    //         state.myPostData.push(newPost);
    //         state.newPostText = '';
    //         //this._callSubscriber(state);
    //     }
    // } 
    // else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    //     // this._callSubscriber(this._state);
    // } 

    // return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});

//or another way or simple 

export  const updateNewPostActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT,
       newText: text 
    });

export default postREDUCER;