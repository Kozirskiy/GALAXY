import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, logout } from './../../redux/authREDUCER';




class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {

        return <Header {...this.props} />
    };
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    };
};

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);