import React from "react";
import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <div className={s.contentBlock}>
            <h1>Please wrire your login here or exit from this site</h1>
            <form onSubmit={props.handleSubmit} >
                <div> 
                    <Field placeholder={'Login' } 
                           name={'login'} 
                           component={Input}
                           validate={[required]}
                           />
                </div>
                <div>
                    <Field placeholder={'Password'} 
                           name={'password'} 
                           component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} 
                           name={'rememberMe'} 
                           type={'checkbox'}
                           />
                            Remember me
                </div>
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
        console.log(formData)
    }

    return(
        <LoginReduxForm onSubmit={onSubmit}/>
    )
}

export default Login;