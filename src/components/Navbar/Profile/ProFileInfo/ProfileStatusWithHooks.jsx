import React from "react";
import s from './ProFileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    return (
        <div>
            <div className={s.statusBlock}>
                {
                    <div>
                        <span >Your status &#8658; {props.status || 'no status'}</span>

                    </div>
                }

                {false &&
                    <div>
                        <input className={s.inputStatus} autoFocus={true} />
                    </div>
                }
            </div>
        </div>
    )
}


export default ProfileStatusWithHooks;
