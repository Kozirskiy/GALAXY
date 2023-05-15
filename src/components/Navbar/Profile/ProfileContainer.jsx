import React from 'react';
import { connect } from 'react-redux';
import ProFile from './ProFile';
import { getUserProfile, updateStatus, getStatus } from './../../../redux/postREDUCER';
import { useLocation, useNavigate, useParams} from "react-router-dom";
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;

            // if(!userId) {
            //     this.props.history.push('/login');
            // }
        }
        
        this.props.getUserProfile(userId); 
        this.props.getStatus(userId);
    }

    render() {

        return (
            < ProFile

                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}

            />
        );
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => {
    return {
        profile: state.postPAGE.profile,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth, 
        nameFromAPI: state.postPAGE.nameFromAPI,
        status: state.postPAGE.status
    };
};

function withRouter(Component) {

    function ComponentWithRouterProp(props) {

        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<Component {...props} router={{ location, navigate, params }}
        />
        );
    }

    return ComponentWithRouterProp;
}


export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus  }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
