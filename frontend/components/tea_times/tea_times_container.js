import { connect } from "react-redux";
import TeaTimes from "./tea_times";
import { fetchTeaTimes } from "../../actions/tea_time_actions";
import { fetchCities } from "../../actions/cities_actions";


const mSTP = (state, ownProps) => {
    return {
        teaTimes: state.entities.teaTimes[ownProps.match.props.teaTimeId],
        cities: Object.values(state.entities.cities),
    }
};


const mDTP = dispatch => {
    return {
        fetchTeaTimes: () => dispatch(fetchTeaTimes()),
        fetchCities: () => dispatch(fetchCities()),
    }
};

export default connect(mSTP, mDTP)(TeaTimes);