import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';
import { Navigate } from 'react-router-dom';

const  Dialogs = (props) => {

    let state = props.messagePAGE;

    let dialogElements = state.dialogData.map(d => <DialogItem key={d.id} name={d.name}  />);      

    let messageElements = state.messageData.map(m => <MessageItem messageText={m.message} key={m.id} />);

    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let addMessageFromButton = () => {
        props.newMessageDialogsGlobal();
    };

    let onMessage = () => {
        let text = newMessageElement.current.value;
        props.onMessage(text);
    };


    if(!props.isAuth) return <Navigate to={'/login'}/>;


    return (
        <div className={s.contentBlock}>
            <h2>Your dialogs in Galaxy</h2>
            <div className={s.contentBlock__dialogs + " " + s.dflex}>
                <div className={s.dialogs + ' ' + s.dflex}>

                    {dialogElements}
                    
                </div>
                <div className={s.messages}>

                    {messageElements}

                    <div className={s.contentBlock__textarea_button + " " + s.dflex}>

                        <textarea onChange={onMessage} type="text" value={newMessageText} ref={newMessageElement} placeholder='write here placeholder'>

                        </textarea>

                        <button onClick={ addMessageFromButton } >
                            Send 
                            <span>
                                &#8594;
                            </span> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;