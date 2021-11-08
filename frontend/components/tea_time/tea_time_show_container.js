import { connect } from "react-redux";
import TeaTimeShow from "./tea_time_show";
import { fetchTeaTime } from "../../actions/tea_time_actions";
import { fetchUsers } from "../../actions/user_actions";



const mSTP = (state, ownProps) => {
    return {
        teaTime: state.entities.teaTimes[ownProps.match.params.teaTimeId]
    }
};


const mDTP = dispatch => {
    return {
        fetchTeaTime: (teaTime) => dispatch(fetchTeaTime(teaTime)),
        fetchUser: (user) => dispatch(fetchUser(user))
    }
};

export default connect(mSTP, mDTP)(TeaTimeShow);