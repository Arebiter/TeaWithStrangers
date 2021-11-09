import { connect } from "react-redux";
import TeaTimeShow from "./tea_time_show";
import { deleteTeaTime, fetchTeaTime } from "../../actions/tea_time_actions";
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { createAttendance, deleteAttendance, fetchAttendances } from "../../actions/attendance_actions";



const mSTP = (state, ownProps) => {
    // debugger
    return {
        teaTime: state.entities.teaTimes[ownProps.match.params.teaTimeId],
        currentUserId: state.entities.users[state.session.id].id,
        users: state.entities.users,
        attendance: Object.values(state.entities.attendances).find(attendance => (
            (attendance.user_id === state.session.id) &&
            (attendance.teatime_id === Number(ownProps.match.params.teaTimeId)))),
        attendances: state.entities.attendances
    }
};


const mDTP = dispatch => {
    return {
        fetchTeaTime: (teaTimeId) => dispatch(fetchTeaTime(teaTimeId)),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        createAttendance: (attendance) => dispatch(createAttendance(attendance)),
        deleteAttendance: (attendanceId) => dispatch(deleteAttendance(attendanceId)),
        fetchAttendances: () => dispatch(fetchAttendances())
    }
};

export default connect(mSTP, mDTP)(TeaTimeShow);