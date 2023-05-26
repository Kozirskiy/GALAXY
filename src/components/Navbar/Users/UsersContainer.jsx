import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from './../../../redux/usersREDUCER';
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader';

// import { withAuthRedirect } from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';

// import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersAllUsers } from '../../../redux/user_selectors';

import { followingInProgress, getCurrentPage, getIsFetching, getPageSizeSelector, getTotalUsersCount, getUsersSuperSelector } from '../../../redux/user_selectors';
// import { getUsersAllUsers } from '../../../redux/user_selectors';



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = ( pageNumber ) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
        {this.props.isFetching ? <Preloader/> : null}
            <Users  totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    // toggleFollowingProgress={this.props.toggleFollowingProgress}
                    followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

// let withRedirect =  withAuthRedirect(UsersContainer) 

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPAGE.users,
//         pageSize: state.usersPAGE.pageSize,
//         totalUsersCount: state.usersPAGE.totalUsersCount,
//         currentPage: state.usersPAGE.currentPage,
//         isFetching: state.usersPAGE.isFetching,
//         followingInProgress: state.usersPAGE.followingInProgress
//     };
// };

let mapStateToProps = (state) => {
    return {
        // users: getUsersAllUsers(state),
        users: getUsersSuperSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: followingInProgress(state)
    };
};
   //--> in this func == mapStateToProps we describe how is work our elements of our state <--

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
) (UsersContainer)
