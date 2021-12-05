import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { fetchReviews, createReview } from "../../actions/review_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchTeaTimes } from "../../actions/tea_time_actions";
import { fetchAttendances } from "../../actions/attendance_actions";
import { withRouter } from "react-router";


const mSTP = (state) => {
    const attendingTeaTimes = Object.values(state.entities.teaTimes).filter(teaTime => ((Object.values(state.entities.attendances)
        .filter(attendance => ((attendance.user_id === state.session.id))) //get attandances for current user
        .map(attend => attend.teatime_id)) //get array of teatimeids from user's attendances
        .includes(teaTime.id))); //get teatimes user has attended or will be attanding
    const currentUserAttendingHostsIdArray = attendingTeaTimes.map(host => host.host_id); //make array of ids of hosts from teatimes current user is attending or has attended
    const currentUser = state.entities.users[state.session.id];
    const currentUserReviewedHosts = currentUser.reviews_of_hosts;//array of ids of hosts the current user has reviewed
    const availableHosts = currentUserAttendingHostsIdArray.filter(host_id => !currentUserReviewedHosts.includes(host_id))
        .concat(currentUserReviewedHosts.filter(host_id => !currentUserAttendingHostsIdArray.includes(host_id))); //get array of hosts user had not reviewed yet - from list of hosts of teatimes current user is attending
    return {
        currentUser: currentUser,
        attendingTeaTimes: attendingTeaTimes, //get teatimes user has attended or will be attanding
        availableHosts: Object.values(state.entities.users).filter(host => availableHosts.includes(host.id)), //get the hosts of teatimes the user is attending but has not reviewed 
        // Object.values(state.entities.users).filter(host => currentUserAttendingHostsIdArray.includes(host.id))
        userReviews: Object.values(state.entities.reviews).filter(review => review.user_id === state.session.id), //find all reviews by the current user
        userReviewedHosts: Object.values(state.entities.users).filter(host => currentUserReviewedHosts.includes(host.id)), //hosts current user has reviewed
        userReviewsByOthers: Object.values(state.entities.reviews).filter(review => review.host_id === state.session.id), //find all reviews of current user by others
        review: {
            user_id: "",
            host_id: "",
            rating: 0,
            review: ""
        }
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews()),
        fetchUsers: () => dispatch(fetchUsers()),
        createReview: () => dispatch(createReview(review)),
        fetchTeaTimes: () => dispatch(fetchTeaTimes()),
        fetchAttendances: () => dispatch(fetchAttendances())
    }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));