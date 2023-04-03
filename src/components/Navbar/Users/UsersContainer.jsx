// import React from "react";
import Users from "./Users";
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from './../../../redux/usersREDUCER';


let mapStateToProps = (state) => {
    return {
        users: state.usersPAGE.users,
        pageSize: state.usersPAGE.pageSize,
        totalUsersCount: state.usersPAGE.totalUsersCount,
        currentPage: state.usersPAGE.currentPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC (userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC (userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC (users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount));
        }


    };
};

export default connect (mapStateToProps, mapDispatchToProps) (Users);