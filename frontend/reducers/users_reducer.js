import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS, RECEIVE_USER } from "../actions/user_actions";


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = action.currentUser
            return nextState;
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            nextState[action.user.id] = action.user
            return nextState;
        default:
            return oldState;
    }
};

export default usersReducer;