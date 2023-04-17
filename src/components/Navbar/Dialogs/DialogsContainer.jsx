import { addNewMesageActionCreator, onMessageActionCreator } from '../../../redux/messageREDUCER';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';


let mapStateToProps = (state)=> {
    return {
        messagePAGE: state.messagePAGE
    };
};


let mapDispatchToProps = (dispatch)=> {

return {
    newMessageDialogsGlobal: () => {
        dispatch(addNewMesageActionCreator());
    },
    onMessage: (text) => {
        dispatch(onMessageActionCreator(text));
    }
};
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);




// let mapStateToProps = (state) => {
//     return {
//         // dialogData: state.messagePAGE.dialogData,

//         // newMessageItem: state.messagePAGE.newMessageItem,
//         messagePAGE: state.messagePAGE
//     };
// };

// let mapDispatchToProps = (dispatch) => { 
//     return {
//         onMessage: (text) => {
//             dispatch(onMessageActionCreator(text))   
//         },
//         newMessageDialogs: () => {
//             dispatch(addNewMesageActionCreator())
//         }
//     };
// };
 
// const DialogsContainer = () => connect (mapStateToProps, mapDispatchToProps)(Dialogs); 

export default DialogsContainer;