import { connect } from "react-redux";
import TeaTimeForm from "./tea_time_form";
import { updateTeaTime } from "../../actions/tea_time_actions";
import { fetchCities } from "../../actions/cities_actions";
import { fetchUsers } from "../../actions/user_actions"


const mSTP = (state) => {
    return {
        formType: "Edit Tea Time",
        cities: Object.values(state.entities.cities),
        currentUser: state.entities.users[state.session.id]
    }
};


const mDTP = dispatch => {
    return {
        processAction: teaTime => dispatch(updateTeaTime(teaTime)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchCities: () => dispatch(fetchCities()),
    }
};

export default connect(mSTP, mDTP)(TeaTimeForm);