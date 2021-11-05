import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import ProfileWelcome from "./profile_welcome";


const mSTP = (state) => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchUser: user => dispatch(fetchUser(user))
    }
}

export default connect(mSTP, mDTP)(ProfileWelcome);