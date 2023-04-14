import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsers } from './../../../redux/usersREDUCER';
//import axios from 'axios';
import Users from "./Users";
import Preloader from '../../common/Preloader/Preloader';
// import { getUsers, usersAPI } from '../../../api/api';


class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage, this.props.pageSize);

        //was code below

        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {

        //         this.props.toggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
        //     });
    }

    onPageChanged = ( pageNumber ) => {


        this.props.getUsers(pageNumber, this.props.pageSize);

        // this.props.setCurrentPage( pageNumber );
        // this.props.toggleIsFetching(true);

        // usersAPI.getUsers( pageNumber, this.props.pageSize).then(data => {

        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        // });

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

let mapStateToProps = (state) => {
    return {
        users: state.usersPAGE.users,
        pageSize: state.usersPAGE.pageSize,
        totalUsersCount: state.usersPAGE.totalUsersCount,
        currentPage: state.usersPAGE.currentPage,
        isFetching: state.usersPAGE.isFetching,
        followingInProgress: state.usersPAGE.followingInProgress
    };
};

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    
    toggleFollowingProgress,

    getUsers
})

(UsersContainer);

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }


//     };
// };

