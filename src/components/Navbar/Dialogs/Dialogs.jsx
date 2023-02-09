import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Icon from '../Profile/Myposts/Post/iconForPost.png';

const Dialogs = () => {
    return (
        <div className={s.contentBlock}>
            <h2>Your dialogs in Galaxy</h2>
            <div className={s.contentBlock__dialogs + " " + s.dflex}>
                <div className={s.dialogs + ' ' + s.dflex}>
                    {/* <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/Oleksandr'> Oleksandr</NavLink>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/Bohdan'> Bohdan</NavLink>
                    <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/Juliya'> Juliya</NavLink> */}
                    <NavLink className={s.item} to=''> Oleksandr</NavLink>
                    <NavLink className={s.item} to=''> Bohdan</NavLink>
                    <NavLink className={s.item} to=''> Juliya</NavLink>
                </div>
                <div className={s.messages}>
                    <div className={s.messagesBlock}>
                        <img src={Icon} />
                        <p className={s.messagesItem}>Hi, how are you?</p>
                    </div>
                    <div className={s.messagesBlock}>
                        <img src={Icon} />
                        <p className={s.messagesItem}>Hello, when you will come to me?</p>
                    </div>
                    <div className={s.messagesBlock}>
                        <img src={Icon} />
                        <p className={s.messagesItem}>Hi, what time is it now?</p>
                    </div>
                    {/* <NavLink className = {s.itemMessage} to=''> Message</NavLink>
                    <NavLink className = {s.itemMessage} to=''> Message</NavLink>
                    <NavLink className = {s.itemMessage} to=''> Message</NavLink> */}
                    {/* <p className="messagesItem">Message</p>
                    <p className="messagesItem">Message</p>
                    <p className="messagesItem">Message</p> */}
                </div>
            </div>

        </div>
    );
}

export default Dialogs;