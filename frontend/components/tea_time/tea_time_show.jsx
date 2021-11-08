import React from "react";
import { Link } from "react-router-dom";


class TeaTimeShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    componentDidMount() {
        this.props.fetchTeaTime(this.props.match.params.teaTimeId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.teaTime !== prevProps.teaTime) {
            this.props.fetchUser(this.props.teaTime.host_id);
        }
    }

    render() {
        if (!this.props.teaTime) {
            return null
        }
        const { teaTime } = this.props;
        // console.log(teaTime.attendees.length);

        const editBtn = (teaTime.host_id === this.props.currentUserId) ? (
            <Link to={`/teaTimes/${teaTime.id}/edit`}>This is the edit button</Link>
        ) : (
            <div></div>
        );

        // if (teaTime.host_id === this.props.currentUserId){

        // }
        const joinBtn = ((teaTime.host_id !== this.props.currentUserId)) ? (
            (teaTime.attendees.length <= 6) ? (
                (teaTime.attendees.includes(this.props.currentUserId) ? (
                    <button>Leave the Tea Time</button>
                ) : (
                    <button>Join Tea Time</button>
                ))
            ) : (
                <h2>Sorry, this teatime is full</h2>
            )//if the time is not full, if the time is full
        ) : (
            //if the time is full, or if you're the host
            <h2>You are the host</h2>
        );

        return (
            <div>
                <h2>This is the teatime show page for</h2>
                {editBtn}
                {joinBtn}
            </div>
        )
    }
}

export default TeaTimeShow;