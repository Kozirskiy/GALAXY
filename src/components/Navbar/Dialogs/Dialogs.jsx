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


const Dialogs = () => {
    return (
        <div className={s.contentBlock}>
            <h2>Your dialogs in Galaxy</h2>
            <div className={s.contentBlock__dialogs + " " + s.dflex}>
                <div className={s.dialogs + ' ' + s.dflex}>
                    <DialogItem name='OleksandrK' id='1' />
                    <DialogItem name='Bohdan' id='2' />
                    <DialogItem name='Juliya' id='3' />
                </div>
                <div className={s.messages}>
                    <MessageItem messageText='Hi, how are you?'/>
                    <MessageItem messageText='Hello, when you will come to me?'/>
                    <MessageItem messageText='Hi, what time is it now?'/>
                </div>
            </div>

        </div>
    );
}

export default Dialogs;