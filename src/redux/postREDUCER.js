const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const myPostDataREDUCER = (state, action) => {


    if (action.type === ADD_POST) {
        let newPost = {
            id: 4,
            message: this._state.newPostText,
            iconLike: 0
        }; 
        if (state.newPostText !== '') {
            state.myPostData.push(newPost);
            state.newPostText = '';
            //this._callSubscriber(state);
        }
    } 
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
        // this._callSubscriber(this._state);
    } 

    return state;
};
