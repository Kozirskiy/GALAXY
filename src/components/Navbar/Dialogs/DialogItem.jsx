import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {

    let path = '/dialogs' + props.id;

    return (
        <div className={s.dialogs + ' ' + s.dflex}>
            <div>

                <NavLink className={s.item} to={path}>{props.name}</NavLink>
                
            </div>
        </div>
    )
}

export default DialogItem;