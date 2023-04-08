import axios from 'axios';


const instanse = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '376b2ee5-27e1-420f-b2c0-9e617cebe7b6'
    }
});

// const baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {

        return instanse.get(`users?page=${currentPage}&count=${pageSize}`, 
                        {
                            withCredentials: true
                        }).then(response => {
                            return response.data;
                    });
                }
};





