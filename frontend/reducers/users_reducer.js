import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


const usersReducer = (oldState = {}, actions) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            nextState[action.currentUser.id] = actions.currentUser
            return nextState;
        default:
            return oldState;
    }
};

export default usersReducer;