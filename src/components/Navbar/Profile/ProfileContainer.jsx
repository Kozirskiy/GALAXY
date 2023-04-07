import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import ProFile from './ProFile';
import { setUserProfile } from './../../../redux/postREDUCER';

import { useLocation, useNavigate, useParams,} from "react-router-dom";




class ProfileContainer extends React.Component {


    

    componentDidMount () {
        
        // let userId = this.props.match.params.userId;
        let userId = this.props.router.params.userId;

        // if (!userId) {
        //     userId = 2;
        // }

        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data);   

            // this.props.setUserName(response.data);            
        });
        
    }

    render () {
        return (
            < ProFile 
                     {...this.props} 
                     profile={this.props.profile} 
                    //  name={this.props.name}
                      />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.postPAGE.profile
        // name: state.postPAGE.name
    }
}


// let WithUrlDataContainerComponent =  withRouter(ProfileContainer);

function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));