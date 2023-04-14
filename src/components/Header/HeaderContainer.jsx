import React from 'react';
import Header from './Header';
//import { NavLink, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAuthUserData } from './../../redux/authREDUCER';
import { authAPI } from '../../api/api';




class HeaderContainer extends React.Component {

    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        this.props.getAuthUserData();

        // authAPI.me()
        //     .then(response => {
                        
        //         if (response.data.resultCode === 0) {

        //             let { id, login, email } = response.data.data;

        //             this.props.setAuthUserData(id, login, email);
        //         }
        //     });
            
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

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);