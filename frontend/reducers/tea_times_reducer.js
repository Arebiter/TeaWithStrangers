import { RECEIVE_TEA_TIMES, RECEIVE_TEA_TIME, REMOVE_TEA_TIME } from "../actions/tea_time_actions";


const teaTimesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };

    switch (action.type) {
        case RECEIVE_TEA_TIMES:
            return action.teaTimes
        case RECEIVE_TEA_TIME:
            nextState[action.teaTime.id] = action.teaTime
            return nextState;
        case REMOVE_TEA_TIME:
            delete nextState[action.teaTimeId]
            return nextState;
        default:
            return oldState;
    }
};

export default teaTimesReducer;