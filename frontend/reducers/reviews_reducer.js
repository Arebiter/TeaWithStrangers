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
        // case RECEIVE_ATTENDANCE:
        //     nextState[action.attendance.teatime_id].attendees.push(action.attendance.user_id)
        //     return nextState
        // case REMOVE_ATTENDANCE:
        //     const teaId = action.attendance.teatime_id
        //     const userId = action.attendance.user_id
        //     let attendees = nextState[teaId].attendees
        //     attendees.splice(attendees.indexOf(userId), 1)
        //     nextState[teaId].attendees = attendees
        //     // const attendeeArray = nextState[action.attendance.teatime_id].attendees.filter(attendeeId => attendeeId !== action.attendance.user_id)
        //     // nextState[action.attendance.teatime_id].attendees = attendeeArray
        //     return nextState
        default:
            return oldState;
    }
};

export default reviewsReducer;