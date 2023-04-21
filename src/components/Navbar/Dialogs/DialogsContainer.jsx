import { addNewMesageActionCreator, onMessageActionCreator } from '../../../redux/messageREDUCER';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';




// let AuthRedirectComponent = withAuthRedirect(Dialogs);

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

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);