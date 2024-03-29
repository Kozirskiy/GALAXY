import React from "react";
import s from './Users.module.css';
// import * as axios from 'axios';
import axios from 'axios';
import userPhoto from './../../../img/users.png';
const Users = (props) => {
    let getUsersFromAPI = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
    
                    props.setUsers(response.data.items);
                });
    
            // props.setUsers([
            //     {
            //         id: 1, photoUrl: 'https://cdn-icons-png.flaticon.com/512/2983/2983798.png',
            //         followed: true, fullname: 'Oleksandr', status: 'I am here', location: { city: 'Kyiv', country: 'Ukraine' }
            //     },
            //     {
            //         id: 2, photoUrl: 'https://cdn-icons-png.flaticon.com/512/2983/2983798.png',
            //         followed: true, fullname: 'Bohdan', status: 'I am here too', location: { city: 'Kyiv', country: 'Ukraine' }
            //     },
            //     {
            //         id: 3, photoUrl: 'https://cdn-icons-png.flaticon.com/512/2983/2983798.png',
            //         followed: true, fullname: 'Juliya', status: 'I am here too', location: { city: 'Kyiv', country: 'Ukraine' }
            //     },
            // ]);
        }

    };
    
    // console.log()


    return (<div className={s.contentBlock}>
        <button onClick={getUsersFromAPI}>getUsersFromAPI</button>

        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" className={s.photo} />
                    <div>your photo</div>
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
        </div>)}
    </div>)
};

// export default Users;