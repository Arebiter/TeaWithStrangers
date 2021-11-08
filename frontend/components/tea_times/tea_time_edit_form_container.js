import { connect } from "react-redux";
import TeaTimeForm from "./tea_time_form";
import { deleteTeaTime, updateTeaTime } from "../../actions/tea_time_actions";
import { fetchCities } from "../../actions/cities_actions";
import { fetchUsers } from "../../actions/user_actions";
import { fetchTeaTime } from "../../actions/tea_time_actions"
import React from "react";
import { withRouter } from "react-router";


class TeaTimeEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.redirectTea = this.redirectTea.bind(this);
    }
    componentDidMount() {
        this.props.fetchTeaTime(this.props.match.params.teaTimeId);
        this.props.fetchCities();
    }

    redirectTea() {
        this.props.history.push(`/teaTimes`);
    }

    render() {
        const { cities, formType, currentUser, teaTime, processAction } = this.props;
        if (!teaTime || !cities) return null;
        return (
            <TeaTimeForm
                formType={formType}
                teaTime={teaTime}
                cities={cities}
                currentUser={currentUser}
                fetchCities={fetchCities}
                processAction={processAction}
                redirectTea={this.redirectTea}
                deleteTeaTime={deleteTeaTime}
            />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        formType: "Edit Tea Time",
        cities: Object.values(state.entities.cities),
        currentUser: state.entities.users[state.session.id],
        teaTime: state.entities.teaTimes[ownProps.match.params.teaTimeId]
    }
};


const mDTP = dispatch => {
    return {
        processAction: teaTime => dispatch(updateTeaTime(teaTime)),
        fetchTeaTime: teaTimeId => dispatch(fetchTeaTime(teaTimeId)),
        fetchUsers: () => dispatch(fetchUsers()),
        fetchCities: () => dispatch(fetchCities()),
        deleteTeaTime: (teaTimeId) => dispatch(deleteTeaTime(teaTimeId))
    }
};

export default withRouter(connect(mSTP, mDTP)(TeaTimeEditForm));