import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";


class TeaTimeShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            teatime_id: "",
            user_id: ""
        };
        this.joinTeaTime = this.joinTeaTime.bind(this);
        this.leaveTeaTime = this.leaveTeaTime.bind(this);
    }
    componentDidMount() {
        // debugger
        this.props.fetchTeaTime(this.props.match.params.teaTimeId);
        this.props.fetchAttendances();
        this.setState({ teatime_id: this.props.match.params.teaTimeId });
        this.setState({ user_id: this.props.currentUserId });
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (this.props.teaTime !== prevProps.teaTime) {
            this.props.fetchUser(this.props.teaTime.host_id);
            this.props.fetchAttendances();
        }
    }

    joinTeaTime() {
        // debugger
        const attendance = Object.assign({}, this.state)
        this.props.createAttendance(attendance);
    }

    leaveTeaTime() {
        // const attendance = Object.assign({}, this.state)
        this.props.deleteAttendance(this.props.attendance.id)
    }

    render() {

        // console.log(this.props);
        if (!this.props.teaTime || !this.props.users[this.props.teaTime.host_id]) {
            return null
        }
        const { teaTime } = this.props;
        // if (!this.props.users[teaTime.host_id]) {
        //     return null
        // };

        const { users } = this.props;

        const editBtn = (teaTime.host_id === this.props.currentUserId) ? (
            <Link to={`/teaTimes/${teaTime.id}/edit`}>This is the edit button</Link>
        ) : (
            <div></div>
        );

        const joinBtn = ((teaTime.host_id !== this.props.currentUserId)) ? (
            (teaTime.attendees.length <= 6) ? (
                (teaTime.attendees.includes(this.props.currentUserId) ? (
                    <button onClick={this.leaveTeaTime}>Leave the Tea Time</button>
                ) : (
                    <button onClick={this.joinTeaTime}>Join Tea Time</button>
                ))
            ) : (
                <h2>Sorry, this teatime is full</h2>
            )
        ) : (
            <h2>You are the host</h2>
        );

        const teaDate = moment(teaTime.date).format("dddd, MMMM Do YYYY")
        const teaStart_pre = new Date("1970-01-01T" + teaTime.start_time)
        const teaEnd_pre = new Date("1970-01-01T" + teaTime.end_time)
        const teaStart = moment(teaStart_pre).format('hh:mm a')
        const teaEnd = moment(teaEnd_pre).format('hh:mm a')

        console.log(this.props);
        // debugger
        return (
            <div>
                <h2>This tea times is being hosted by {users[teaTime.host_id].fname} {users[teaTime.host_id].lname}</h2>
                <p>{teaTime.location}</p>
                <p>On {teaDate} from {teaStart} to {teaEnd}</p>
                <p>{users[teaTime.host_id].bio}</p>
                <p>{teaTime.description}</p>
                {editBtn}
                {joinBtn}
                <img className="profile-img" src={users[teaTime.host_id].photoUrl} />
            </div>
        )
    }
}

export default TeaTimeShow;