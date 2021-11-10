import { connect } from "react-redux";
import ProfileTea from "./profile_tea";
import { fetchTeaTimes } from "../../actions/tea_time_actions";
import { fetchUser } from "../../actions/user_actions";
import { deleteAttendance, fetchAttendances } from "../../actions/attendance_actions";



const mSTP = (state) => {
    return {
        pageType: "Joined",
        tea_times: Object.values(state.entities.teaTimes),
        currentUser: state.entities.users[state.session.id],
        attendances: Object.values(state.entities.attendances)
    }
};


const mDTP = dispatch => {
    return {
        fetchTeaTimes: () => dispatch(fetchTeaTimes()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        deleteAttendance: (attendanceId) => dispatch(deleteAttendance(attendanceId)),
        fetchAttendances: () => dispatch(fetchAttendances())
    }
};

export default connect(mSTP, mDTP)(ProfileTea);