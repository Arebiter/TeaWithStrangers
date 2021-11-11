import { connect } from "react-redux";
import TeaTimeForm from "./tea_time_form";
import { createTeaTime, fetchTeaTimes } from "../../actions/tea_time_actions";
import { fetchCities } from "../../actions/cities_actions";
import { fetchUsers } from "../../actions/user_actions";
import { withRouter } from "react-router";



const mSTP = (state) => {
    return {
        formType: "Create Tea Time",
        cities: Object.values(state.entities.cities),
        currentUser: state.entities.users[state.session.id],
        teaTime: {
            location: "",
            date: "",
            start_time: "",
            end_time: "",
            description: "",
            city_id: "",
            host_id: ""
        }
    }
};


const mDTP = dispatch => {
    return {
        processAction: teaTime => dispatch(createTeaTime(teaTime)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchCities: () => dispatch(fetchCities()),
        fetchTeaTimes: () => dispatch(fetchTeaTimes)
    }
};

export default withRouter(connect(mSTP, mDTP)(TeaTimeForm));