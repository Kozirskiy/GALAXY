import React from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import ProFile from './ProFile';
// import setUserProfile from '../../../redux/postREDUCER';
import { setUserProfile } from './../../../redux/postREDUCER';


class ProfileContainer extends React.Component {

    componentDidMount () {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render () {
        return (
            <ProFile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.postPAGE.profile
    }
}

export default connect(mapStateToProps, {setUserProfile}) (ProfileContainer);