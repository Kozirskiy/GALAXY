import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem';
import MessageItem from './MessageItem';

const  Dialogs = (props) => {

    let state = props.messagePAGE;

    let dialogElements = state.dialogData.map(d => <DialogItem name={d.name} id={d.id} />);      

    let messageElements = state.messageData.map(m => <MessageItem messageText={m.message} />);

    let newMessageItem = state.newMessageItem;

    let newMessageElement = React.createRef();

    let addMessageFromButton = () => {
        props.newMessageDialogs();
    };

    let onMessage = (e) => {
        let text = newMessageElement.current.value;
        props.onMessage(text);
    };
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

                        <textarea onChange={onMessage} type="text" value={newMessageItem} ref={newMessageElement} placeholder='write here'>

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