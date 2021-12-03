import { RECEIVE_REVIEW_ERRORS, REMOVE_REVIEW_ERRORS } from "../actions/review_actions";


const reviewErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors
        case REMOVE_REVIEW_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default reviewErrorsReducer;