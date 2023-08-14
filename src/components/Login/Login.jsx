import React from "react";
import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { createField, Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from './../../redux/authREDUCER';
import { Navigate } from 'react-router-dom';


const LoginForm = ({handleSubmit, error}) => {
    return (
        <div className={s.contentBlock}>
            <h1>Please wrire your login here or exit from this site</h1>
            <form onSubmit={handleSubmit} >
                
                    {createField('Email', 'email', [required], Input )}
                    {createField('Password', 'password', [required], Input, {type: 'password'} )}
                    {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}

                { error && <div className={s.formSummaryError}> 
                                {error} 
                           </div> }

                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>

    )
};
const LoginReduxForm = reduxForm ({ form: 'login' })(LoginForm)
 

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    } 
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return(
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login}) (Login);