import React, {useEffect, useState} from "react";
import s from './ProFileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    // let h2 = document.createElement('h2');
    // h2.innerHTML = 'Developer';
    // document.querySelector('body').appendChild(h2);
    

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode  = ()  =>  {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
      };

    return (
        <div>
            <div className={s.statusBlock}>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateEditMode}>Your status: {props.status || 'no status' }</span>
                    </div>
                }

                {editMode &&
                    <div className={s.statusBlock_box}>
                        <input onChange={onStatusChange} autoFocus={true} onDoubleClick={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>
        </div>
    )
}

export default ProfileStatusWithHooks;
