import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from './../../redux/authREDUCER';
import {initialiseApp} from '../../redux/appREDUCER';
import Preloader from '../common/Preloader/Preloader';

class HeaderContainer extends React.Component {


    componentDidMount() {
        this.props.initialiseApp();
    }
    render() {
        if(!this.props.initialised) {
            return <Preloader/>
        }
        

        return <Header {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id,
        initialised: state.app.initialised
    };
};

export default connect(mapStateToProps, { initialiseApp , logout })(HeaderContainer);