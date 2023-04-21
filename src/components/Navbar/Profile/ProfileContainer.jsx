import React from 'react';
import { connect } from 'react-redux';
import ProFile from './ProFile';
import { getUserProfile } from './../../../redux/postREDUCER';
import { useLocation, useNavigate, useParams, } from "react-router-dom";
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId) {
            userId = 28588;
        }

        this.props.getUserProfile(userId);

    }

    render() {


        return (
            < ProFile

                {...this.props}

                profile={this.props.profile}

            />
        );
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     };
// };

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

let mapStateToProps = (state) => {
    return {
        profile: state.postPAGE.profile,
        nameFromAPI: state.postPAGE.nameFromAPI
    };
};

function withRouter(AuthRedirectComponent) {

    function ComponentWithRouterProp(props) {

        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (<AuthRedirectComponent {...props} router={{ location, navigate, params }}
        />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getUserProfile }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)