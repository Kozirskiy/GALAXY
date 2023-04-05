import React from "react";
import s from './Users.module.css';
import userPhoto from './../../../img/users.png';
import { NavLink } from 'react-router-dom';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

return (
    <div className={s.contentBlock}>
                <div className={s.spanBlock}>
                    {pages.map(p => {
                        return <span className={props.currentPage === p ? s.selectedPage : '' + s.hoverPage} onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</span>

                        })}
                </div>
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile' + u.id} >
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.photo} />
                                </NavLink>
                                
                                {/* <div>your photo</div> */}
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> UNFOLLOW </button > : <button onClick={() => {
                                    props.follow(u.id)
                                }}> FOLLOW </button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>
                                    {u.name}
                                </div>
                                <div>
                                    {u.status}
                                </div>
                            </span>
                            <span>
                                <div>
                                    {'u.location.country'}
                                </div>
                                <div>
                                    {'u.location.city'}
                                </div>

                            </span>
                        </span>

                    </div>)

                }
                
            </div >
)}

export default Users;


// {/* {pages.map(p => {
//                         if(pagesCount > 10) {
//                             if(props.currentPage > 5) {
//                                 for (let i = props.currentPage-4; i <= props.currentPage+5; i++) {
//                                     pages.push(i)
//                                     if(i == pagesCount) break
//                                 }
//                             }
//                             else {
//                                 for (let i = 1; i <= 10; i++) {
//                                     pages.push(i)
//                                     if(i == pagesCount) break
//                                 }
//                             }
//                         }  else {
//                             for (let i = 1; i <= pagesCount; i++) {
//                                 pages.push(i)
//                             }
//                         } */}