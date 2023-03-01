import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Icon from '../Profile/Myposts/Post/iconForPost.png';
import { addNewMesageActionCreator, onMessageActionCreator } from '../../../redux/state';


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialogs + ' ' + s.dflex}>
            <div>

                <NavLink className={s.item} to={path}>{props.name}</NavLink>
                
            </div>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={s.messagesBlock}>
            <img src={Icon} alt="icon" />
            <p className={s.messagesItem}>{props.messageText}</p>
        </div>
    )
}






const Dialogs = (props) => {

    let dialogElements = props.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messageElements = props.messageData.map(messEle => <MessageItem messageText={messEle.message} />)

    let newMessageElement = React.createRef();

    let addMessageFromButton = () => {
        props.dispatch(addNewMesageActionCreator())
    };

    let onMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch(onMessageActionCreator(text))
    };

    
    return (
        <div className={s.contentBlock}>
            <h2>Your dialogs in Galaxy</h2>
            <div className={s.contentBlock__dialogs + " " + s.dflex}>
                <div className={s.dialogs + ' ' + s.dflex}>

                    {dialogElements}
                    
                </div>
                <div className={s.messages}>

                    {messageElements}

                    <div className={s.contentBlock__textarea_button + " " + s.dflex}>
                        <textarea onChange={onMessage} type="text" value={props.newMessageDialogs} ref={newMessageElement} placeholder='write here'>

                        </textarea>

                        <button onClick={ addMessageFromButton } >
                            Send 
                            <span>
                                &#8594;
                            </span> 
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className={s.contentBlock__textarea_button + " " + s.dflex}>
                <textarea placeholder='your news...' >

                </textarea>
            </div> */}

        </div>
    );
}

export default Dialogs;