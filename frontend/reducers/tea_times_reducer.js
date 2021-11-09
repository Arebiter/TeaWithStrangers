import { RECEIVE_TEA_TIMES, RECEIVE_TEA_TIME, REMOVE_TEA_TIME } from "../actions/tea_time_actions";
import { RECEIVE_ATTENDANCE, REMOVE_ATTENDANCE } from "../actions/attendance_actions";

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
        case RECEIVE_ATTENDANCE:
            nextState[action.attendance.teatime_id].attendees.push(action.attendance.user_id)
            return nextState
        case REMOVE_ATTENDANCE:
            const teaId = action.attendance.teatime_id
            const userId = action.attendance.user_id
            let attendees = nextState[teaId].attendees
            attendees.splice(attendees.indexOf(userId), 1)
            nextState[teaId].attendees = attendees
            // const attendeeArray = nextState[action.attendance.teatime_id].attendees.filter(attendeeId => attendeeId !== action.attendance.user_id)
            // nextState[action.attendance.teatime_id].attendees = attendeeArray
            return nextState
        default:
            return oldState;
    }
};

export default teaTimesReducer;