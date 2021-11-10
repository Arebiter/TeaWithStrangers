import { connect } from "react-redux";
import TeaTimes from "./tea_times";
import { fetchTeaTimes } from "../../actions/tea_time_actions";
import { fetchCities } from "../../actions/cities_actions";
import { fetchUsers } from "../../util/user_util";


const mSTP = (state, ownProps) => {

    return {
        teaTimes: state.entities.teaTimes,
        cities: Object.values(state.entities.cities),
        users: state.entities.users
    }
};


const mDTP = dispatch => {
    return {
        fetchTeaTimes: () => dispatch(fetchTeaTimes()),
        fetchCities: () => dispatch(fetchCities()),
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mSTP, mDTP)(TeaTimes);