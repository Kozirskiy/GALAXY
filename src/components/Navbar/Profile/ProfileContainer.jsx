import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ProFile from './ProFile';
import { setUserProfile } from './../../../redux/postREDUCER';
// import { setUserNameFromAPI } from './../../../redux/postREDUCER';

import { useLocation, useNavigate, useParams,} from "react-router-dom";




class ProfileContainer extends React.Component {


    

    componentDidMount () {
        
        // let userId = this.props.match.params.userId;
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 28588;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data);         
        });

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`)
        // .then(response => {
        //     this.props.setUserNameFromAPI(response.fullName);            
        // });
        
    }

    render () {
        return (
            < ProFile 

                     {...this.props} 

                     profile={this.props.profile} 

                    //  nameFromAPI={this.props.nameFromAPI}

                      />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.postPAGE.profile,
        nameFromAPI: state.postPAGE.nameFromAPI
    }
}


// let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

function withRouter(ProfileContainer) {

    function ComponentWithRouterProp(props) {

        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return ( <ProfileContainer {...props}  router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile}) (withRouter(ProfileContainer));