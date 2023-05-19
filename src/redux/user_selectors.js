export const getUsersAllUsers = (state) => {
    return state.usersPAGE.users;
};

export const getPageSizeSelector = (state) => {
    return state.usersPAGE.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPAGE.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPAGE.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPAGE.isFetching;
};

export const followingInProgress = (state) => {
    return state.usersPAGE.followingInProgress;
};

