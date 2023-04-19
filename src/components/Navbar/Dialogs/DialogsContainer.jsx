import { addNewMesageActionCreator, onMessageActionCreator } from '../../../redux/messageREDUCER';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';


let AuthRedirectComponent = withAuthRedirect(Dialogs);


// let mapStateToPropsForredirect = (state)=> {
//     return {
//         isAuth: state.auth.isAuth
//     };
// };

// AuthRedirectComponent = connect(mapStateToPropsForredirect) (AuthRedirectComponent);

let mapStateToProps = (state)=> {
    return {
        messagePAGE: state.messagePAGE
        // isAuth: state.auth.isAuth
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





const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;