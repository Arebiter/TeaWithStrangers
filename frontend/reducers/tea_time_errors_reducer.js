import { RECEIVE_TEA_TIME_ERRORS, REMOVE_TEA_TIME_ERRORS } from "../actions/tea_time_actions";


const teaTimeErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_TEA_TIME_ERRORS:
            return action.errors
        case REMOVE_TEA_TIME_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default teaTimeErrorsReducer;