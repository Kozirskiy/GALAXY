import axios from 'axios';
import { setUserProfile } from '../redux/postREDUCER';

const instanse = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '376b2ee5-27e1-420f-b2c0-9e617cebe7b6'
    }
});

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(response => {
            return response.data;
        });
    },

    follow(userId) {
        return instanse.post(`follow/${userId}`, {}, { })
    },

    unfollow(userId) {
        return instanse.delete(`follow/${userId}`)
    },
    
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.');
       return profileAPI.getProfile(userId);
    }
};
export const profileAPI = {
    
    getProfile(userId) {
       return instanse.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instanse.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instanse.put(`profile/status/`, {status: status});
    }
};

export const authAPI = {

    me() {
       return instanse.get(`auth/me`);
    }
};




// export const headerAPI = {


//     getProfile(userId) {

//         let userId = router.params.userId;

//         if (!userId) {
//             userId = 28588;
//         }
//         return instanse.get(`profile/` + userId)
//         .then(response => {
//             setUserProfile(response.data);      
//         });

//     }
// }