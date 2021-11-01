import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import ProfileEditForm from "./profile_edit_form"
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user)),
        updateUser: user => dispatch(updateUser(user))
    }
};

export default withRouter(connect(mSTP, mDTP)(ProfileEditForm));