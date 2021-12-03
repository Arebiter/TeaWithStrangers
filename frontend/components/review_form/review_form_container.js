import { connect } from "react-redux";
import ReviewForm from "./review_form";
import { fetchReviews, createReview } from "../../actions/review_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchTeaTimes } from "../../actions/tea_time_actions";
import { withRouter } from "react-router";


const mSTP = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        host: state.entities.users[state.entities.teaTimes[ownProps.match.params.teaTimeId].host_id],
        review: {
            user_id: "",
            host_id: "",
            rating: "",
            review: ""
        }
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews),
        fetchUsers: () => dispatch(fetchUsers()),
        createReview: () => dispatch(createReview(review)),
        fetchTeaTimes: () => dispatch(fetchTeaTimes)
    }
}

export default withRouter(connect(mSTP, mDTP)(ReviewForm));