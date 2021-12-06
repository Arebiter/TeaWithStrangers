import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_ATTENDANCE, REMOVE_ATTENDANCE } from "../actions/attendance_actions";

const reviewsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            nextState[action.review.id] = action.review
            return nextState;
        case REMOVE_REVIEW:
            delete nextState[action.reviewId]
            return nextState;
        default:
            return oldState;
    }
};

export default reviewsReducer;