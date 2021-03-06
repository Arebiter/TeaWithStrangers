import * as UsersUtil from "../util/user_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveAllUsers = (users) => {
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
};

const receiveUser = user => {
    return {
        type: RECEIVE_USER,
        user
    }
};


export const fetchUsers = () => dispatch => {
    return UsersUtil.fetchUsers()
        .then(users => dispatch(receiveAllUsers(users)))
};

export const fetchUser = userId => dispatch => {
    return UsersUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
};

export const updateUser = formData => dispatch => {
    return UsersUtil.updateUser(formData)
        .then(user => dispatch(receiveUser(user)))
};

