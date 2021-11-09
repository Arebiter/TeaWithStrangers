import { connect } from "react-redux";
import ProfileTea from "./profile_tea";
import { fetchTeaTimes } from "../../actions/tea_time_actions";
import { fetchUser } from "../../actions/user_actions";


const mSTP = (state) => {
    return {
        pageType: "Joined",
        tea_times: Object.values(state.entities.teaTimes),
        currentUser: state.entities.users[state.session.id]
    }
};


const mDTP = dispatch => {
    return {
        fetchTeaTimes: () => dispatch(fetchTeaTimes()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    }
};

export default connect(mSTP, mDTP)(ProfileTea);