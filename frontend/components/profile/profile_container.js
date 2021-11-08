import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import Profile from "./profile";
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId],
        session: state.session.id
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user))
    }
};

export default withRouter(connect(mSTP, mDTP)(Profile));