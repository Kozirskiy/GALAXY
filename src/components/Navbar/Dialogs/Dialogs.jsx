import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';
import { Navigate } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../../../utils/validators/validators';

const Dialogs = (props) => {

    let state = props.messagePAGE;

    let dialogElements = state.dialogData.map((d, index) => <DialogItem key={index} name={d.name} />);

    let messageElements = state.messageData.map((m, index) => <MessageItem messageText={m.message} key={index} />);


    let addNewMessage = (values) => {

        props.newMessageDialogsGlobal(values.newMessageBody);
    }

    if (!props.isAuth) return <Navigate to={'/login'} />;


    return (
        <div className={s.contentBlock}>
            <h2>Your dialogs in Galaxy</h2>
            <div className={s.contentBlock__dialogs + " " + s.dflex}>
                <div className={s.dialogs + ' ' + s.dflex}>

                    {dialogElements}

                </div>
                <div className={s.messages}>

                    {messageElements}

                    <AddMessageFormRedux onSubmit={addNewMessage} />

                </div>
            </div>
        </div>
    );
}
const maxLenght50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.contentBlock__textarea_button + " " + s.dflex}>
                <Field component={Textarea} 
                       name='newMessageBody' 
                       placeholder={'New message'}
                       validate={[required, maxLenght50]}
                       />
                <button>
                    <span>
                        SEND  &#8594;
                    </span>
                </button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;