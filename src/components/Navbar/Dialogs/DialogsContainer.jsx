import React from 'react';
import { addNewMesageActionCreator, onMessageActionCreator } from '../../../redux/messageREDUCER';
import Dialogs from './Dialogs';
import StoreContext from '../../../storeContext';


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

const DialogsContainer = () => {
    // let state = props.store.getState().dialogData;

    // let addMessageFromButton = () => {
    //     props.store.dispatch(addNewMesageActionCreator())
    // };

    // let onMessage = (text) => {
    //     props.store.dispatch(onMessageActionCreator(text))
    // };

    return (
        <StoreContext.Consumer> 
            { (store) => {
                // let state = store.getState().dialogData;

                let addMessageFromButton = () => {
                    store.dispatch(addNewMesageActionCreator())
                };
            
                let onMessage = (text) => {
                    store.dispatch(onMessageActionCreator(text))
                };

                
                return <Dialogs
                            dialogData={store.getState().dialogData}
                            newMessageItemBody={onMessage}
                            addMessageBody={addMessageFromButton}
                            
            /> } }
            
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;