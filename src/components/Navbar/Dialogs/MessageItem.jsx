import React from 'react';
import Icon from '../Profile/Myposts/Post/iconForPost.png';
import s from './Dialogs.module.css';

const  MessageItem = (props) => {
    return (
        <div className={s.messagesBlock}>
            <img src={Icon} alt="icon" />
            <p className={s.messagesItem}>{props.messageText}</p>
        </div>
    )
}

export default MessageItem;