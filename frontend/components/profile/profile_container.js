import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import Profile from "./profile"

const mSTP = (state, ownProps) => {
    return {
        user: state.users[ownProps.match.params.userId]
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user)),
        updateUser: user => dispatch(updateUser(user))
    }
};

export default connect(mSTP, mDTP)(Profile);