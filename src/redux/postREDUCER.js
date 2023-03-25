
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let  initialState = {
    
        myPostData: [
            { id: 1, message: "First post", iconLike: 12 },
            { id: 2, message: "Second post", iconLike: 15 },
            { id: 3, message: "Third post", iconLike: 23 }
        ],

        newPostText: 'Your new post'
    
};


const postREDUCER = (state = initialState, action) => {
    switch(action.type) {

        case UPDATE_NEW_POST_TEXT: 
        {
            let stateCopy = {...state};
            stateCopy.newPostText = {...state.newPostText};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                iconLike: 0
            }; 

            let stateCopy = {...state};
            stateCopy.myPostData = [...state.myPostData];
            stateCopy.myPostData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        
        default: 
            return state;
    }
//     if (action.type === ADD_POST) {
//         let newPost = {
//             id: 4,
//             message: state.newPostText,
//             iconLike: 0
//         }; 
//         if (state.newPostText !== '') {
//             state.myPostData.push(newPost);
//             state.newPostText = '';
//             //this._callSubscriber(state);
//         }
//     } 
//     else if (action.type === UPDATE_NEW_POST_TEXT) {
//         state.newPostText = action.newText;
//         // this._callSubscriber(this._state);
//     } 

//     return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});

//or another way or simple 

export  const updateNewPostActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT,
       newText: text 
    });

export default postREDUCER;