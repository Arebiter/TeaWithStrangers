import * as AttendanceUtil from "../util/attendance_util";

export const RECEIVE_ATTENDANCES = "RECEIVE_ATTENDANCES";
export const RECEIVE_ATTENDANCE = "RECEIVE_ATTENDANCE";
export const REMOVE_ATTENDANCE = "REMOVE_ATTENDANCE";

const receiveAttendances = (attendances) => {
    return {
        type: RECEIVE_ATTENDANCES,
        attendances
    }
};

const receiveAttendance = (attendance) => {
    return {
        type: RECEIVE_ATTENDANCE,
        attendance
    }
};

const removeAttendance = (attendance) => {
    return {
        type: REMOVE_ATTENDANCE,
        attendance
    }
};

export const fetchAttendances = () => dispatch => {
    return AttendanceUtil.fetchAttendances()
        .then(attendances => dispatch(receiveAttendances(attendances)))
};

export const createAttendance = (attendance) => dispatch => {
    return AttendanceUtil.createAttendance(attendance)
        .then(attendance => dispatch(receiveAttendance(attendance)))
};

export const deleteAttendance = (attendanceId) => dispatch => {
    return AttendanceUtil.destroyAttendance(attendanceId)
        .then((attendance) => dispatch(removeAttendance(attendance)))
};
