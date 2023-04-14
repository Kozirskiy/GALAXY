import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ProFile from './ProFile';
import { getUserProfile, setUserProfile } from './../../../redux/postREDUCER';
import { useLocation, useNavigate, useParams,} from "react-router-dom";
// import { headerAPI, usersAPI } from '../../../api/api';




class ProfileContainer extends React.Component {

    componentDidMount () {
        
        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 28588;
        }

        this.props.getUserProfile(userId);



        // headerAPI.getProfile(userId);

        // usersAPI.getProfile(userId).then(response => {
        //     this.props.setUserProfile(response.data);         
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

export default connect(mapStateToProps, { getUserProfile}) (withRouter(ProfileContainer));