import React from "react";
import s from './Login.module.css';


const Login = (props) => {
    return (
        <div className={s.contentBlock}>
            <h1>Please wrire your login here or exit from this site</h1>
            <div className={s.wrapperLoginBox}>
                <textarea name="" id="" cols="30" rows="10">
                    Login
                </textarea>
                <textarea name="" id="" cols="30" rows="10">
                    Password
                </textarea>
            </div>

        </div>

    )
};

export default Login;