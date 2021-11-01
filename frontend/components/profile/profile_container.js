import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import Profile from "./profile"

const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[ownProps.match.params.userId]
    }
};

const mDTP = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user))
    }
};

export default connect(mSTP, mDTP)(Profile);