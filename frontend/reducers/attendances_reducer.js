import { RECEIVE_ATTENDANCES, RECEIVE_ATTENDANCE, REMOVE_ATTENDANCE } from "../actions/attendance_actions";

const AttendanceReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = { ...oldState };

    switch (action.type) {
        case RECEIVE_ATTENDANCES:
            return action.attendances
        case RECEIVE_ATTENDANCE:
            nextState[action.attendance.id] = action.attendance
            return nextState
        case REMOVE_ATTENDANCE:
            delete nextState[action.teaTimeId]
            return nextState
        default:
            return oldState;
    }
};

export default AttendanceReducer;