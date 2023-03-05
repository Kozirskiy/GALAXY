const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const postREDUCER = (state, action) => {

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
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default postREDUCER;