import * as UsersUtil from "../util/user_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
};

const receiveUser = userId => {
    return {
        type: RECEIVE_USER,
        userId
    }
};


export const fetchUsers = () => dispatch => {
    return UsersUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
};

export const fetchUser = userId => dispatch => {
    return UsersUtil.fetchUser(userId)
        .then(userId => dispatch(receiveUser(userId)))
};

export const updateUser = user => dispatch => {
    return UsersUtil.updateUser(user)
        .then(dispatch(receiveUser(user)))
};

