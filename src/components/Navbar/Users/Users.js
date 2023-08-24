import React from "react";
import s from './Users.module.css';
import userPhoto from './../../../img/users.png';
import { NavLink } from 'react-router-dom';
import Preloader from "../../common/Preloader/Preloader";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";



let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, isFetching,  ...props}) => {

return   (                               
            <div className={s.contentBlock}>
                <div className={s.paginatorStyle}>
                    <Paginator currentPage= {currentPage}
                                onPageChanged = {onPageChanged}
                                totalItemsCount = {totalUsersCount}
                                pageSize = {pageSize}
                    />
                </div>
                <div>
                    {isFetching ? <Preloader /> : null}
                        {
                            users.map(u => 
                            <User user={u} 
                                key={u.id} 
                                followingInProgress = {props.followingInProgress}
                                unfollow = {props.unfollow}
                                follow = {props.follow} 
                            />
                        )}
                </div>  
            </div>
)
}
export default Users;
