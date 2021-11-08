import React from "react";
import { Link } from "react-router-dom";
import moment from "moment"

class TeaTimeItemBox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        if (!this.props.teaTime) {
            return null;
        }

        // const startTime = moment(this.props.teaTime.start_time).format('hh:mm:ss');
        // const endTime = moment(this.props.teaTime.end_time).format('hh:mm:ss');
        const { teaTime } = this.props;
        return (
            <Link to={`/teaTimes/${teaTime.id}`} className="tea-time-item-box" >
                <h2>{this.props.teaTime.location}</h2>
                <h2>{this.props.teaTime.start_time}</h2>
                <h2>{this.props.teaTime.end_time}</h2>
                <h2>{this.props.teaTime.attendees.length}</h2>
            </Link>
        )
    }
};

export default TeaTimeItemBox;