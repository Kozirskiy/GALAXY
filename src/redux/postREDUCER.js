
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_NAME = 'SET_USER_NAME';


let  initialState = {
    
        myPostData: [
            { id: 1, message: "First post", iconLike: 12 },
            { id: 2, message: "Second post", iconLike: 15 },
            { id: 3, message: "Third post", iconLike: 23 }
        ],

        newPostText: 'Your new post',
        profile:  null,
        name: null
    
};


const postREDUCER = (state = initialState, action) => {
    switch(action.type) {

        case ADD_POST: 
        {
            let newPost = {
                id: 4,
                message: state.newPostText,
                iconLike: 0
            }; 

            return {
                ...state,
                myPostData: [...state.myPostData, newPost],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: 
        {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE:
            {
                return {...state,
                    profile: action.profile}
            }
        case SET_USER_NAME:
            {
                return {...state,
                    name: action.name}
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
export  const setUserProfile = (profile) => 
    ({ type: SET_USER_PROFILE,
       profile 
    });
    
export  const setUserName = (name) => 
    ({ type: SET_USER_NAME,
       name 
    });

export default postREDUCER;