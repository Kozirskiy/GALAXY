import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from './../../../redux/usersREDUCER';
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader';

// import { withAuthRedirect } from './../../../hoc/withAuthRedirect';
import { compose } from 'redux';

// import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersAllUsers } from '../../../redux/user_selectors';

import { followingInProgress, getCurrentPage, getIsFetching, getPageSizeSelector, getTotalUsersCount, getUsersAllUsers, getUsersAllUsersSuperSelector } from '../../../redux/user_selectors';
// import { getUsersAllUsers } from '../../../redux/user_selectors';



class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);

    }

    onPageChanged = ( pageNumber ) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);

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

let mapStateToProps = (state) => {
    return {
        // users: getUsersAllUsers(state),
        users: getUsersAllUsersSuperSelector(state),
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
