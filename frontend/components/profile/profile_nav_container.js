import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import ProfileNavBar from "./profile_nav";


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

export default connect(mSTP, mDTP)(ProfileNavBar);