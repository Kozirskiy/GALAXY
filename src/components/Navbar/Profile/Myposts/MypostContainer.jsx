import { addPostActionCreator, updateNewPostActionCreator } from '../../../../redux/postREDUCER';
import Mypost from './Mypost';
import { connect } from 'react-redux';



let MapStateToProps = (state) => {
    return {
        postPAGE: state.postPAGE
    };
};

let MapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) =>  {
            dispatch(updateNewPostActionCreator(text));
        },
        newPostText: () => {
            dispatch(addPostActionCreator())
        }
    };
    
};

const MypostContainer = connect(MapStateToProps, MapDispatchToProps)(Mypost);

export default MypostContainer;









// const MypostContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             { (store) => {

//                 // let state = store.getState().postPAGE;
                

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
            
//                 let onPostChangeChange = (text) => {
//                     store.dispatch(updateNewPostActionCreator(text));
//                 };


//               return  < Mypost
//                                 onPostChange={onPostChangeChange}
//                                 newPostText={addPost}
//                                 postPAGE={store.getState().postPAGE}
                                

//             /> } }
//         </StoreContext.Consumer>)
// }