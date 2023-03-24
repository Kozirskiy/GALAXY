// import React from 'react';
import { addNewMesageActionCreator, onMessageActionCreator } from '../../../redux/messageREDUCER';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
// import StoreContext from '../../../storeContext';


// import StoreContext from '../../../storeContext';
//import Provider from 'react-redux';



// const DialogItem = (props) => {

//     let path = '/dialogs/' + props.id;

//     return (
//         <div className={s.dialogs + ' ' + s.dflex}>
//             <div>

//                 <NavLink className={s.item} to={path}>{props.name}</NavLink>

//             </div>
//         </div>
//     )
// }

// const MessageItem = (props) => {
//     return (
//         <div className={s.messagesBlock}>
//             <img src={Icon} alt="icon" />
//             <p className={s.messagesItem}>
                
//                 {props.messageText}
                
//                 </p>
//         </div>
//     )
// }

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer> 
//             {(store) => {
//                 // let state = store.getState().messagePAGE;

//                 let addMessageFromButtonClick = () => {
//                     store.dispatch(addNewMesageActionCreator())
//                 };
            
//                 let onMessageChange = (text) => {
//                     store.dispatch(onMessageActionCreator(text))
//                 };                
//                 return <Dialogs
//                                 newMessageDialogs= {addMessageFromButtonClick}
//                                 onMessage={onMessageChange}
//                                 messagePAGE={store.getState().messagePAGE}
//             /> } }
            
//         </StoreContext.Consumer>
//     )
// }
let mapStateToProps = (state)=> {
    return {
        messagePAGE: state.messagePAGE
    };
};
let mapDispatchToProps = (dispatch)=> {
return {
    newMessageDialogs: () => {
        dispatch(addNewMesageActionCreator());
    },
    onMessage: (text) => {
        dispatch(onMessageActionCreator(text));
    }
};
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);




// let mapStateToProps = (state) => {
//     return {
//         // dialogData: state.messagePAGE.dialogData,

//         // newMessageItem: state.messagePAGE.newMessageItem,
//         messagePAGE: state.messagePAGE
//     };
// };

// let mapDispatchToProps = (dispatch) => { 
//     return {
//         onMessage: (text) => {
//             dispatch(onMessageActionCreator(text))   
//         },
//         newMessageDialogs: () => {
//             dispatch(addNewMesageActionCreator())
//         }
//     };
// };
 
// const DialogsContainer = () => connect (mapStateToProps, mapDispatchToProps)(Dialogs); 

export default DialogsContainer;