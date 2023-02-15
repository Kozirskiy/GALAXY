import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Icon from '../Profile/Myposts/Post/iconForPost.png';


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
            <img src={Icon} />
            <p className={s.messagesItem}>Hi, how are you?{props.messageText}</p>
        </div>
    )
}

// export default DialogItem;


const Dialogs = (props) => {


    let dialogData = [
        { id: 1, name: 'Oleksandr' },
        { id: 2, name: 'Bohdan' },
        { id: 3, name: 'Juliya' }
    ]
    let dialogElements = dialogData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)


    let messageData = [
        { id: 1, message: 'Hi, how are you?' },
        { id: 2, message: 'Hello, when you will come to me?' },
        { id: 3, message: 'Hi, what time is it now?' }
    ]
    let messageElements = messageData
        .map(messEle => <MessageItem messageText={messEle.message} />)


    return (
        <div className={s.contentBlock}>
            <h2>Your dialogs in Galaxy</h2>
            <div className={s.contentBlock__dialogs + " " + s.dflex}>
                <div className={s.dialogs + ' ' + s.dflex}>

                    {dialogElements}

                </div>
                <div className={s.messages}>

                    {messageElements}

                </div>
            </div>

        </div>
    );
}

export default Dialogs;