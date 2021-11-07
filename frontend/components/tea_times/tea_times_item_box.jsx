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

        const startTime = moment(this.props.teaTime.start_time).format('MMMM Do YYYY, h:mm:ss a');
        const endTime = new Date(this.props.teaTime.end_time).toString();

        return (
            <div className="tea-time-item-box">
                <h2>{this.props.teaTime.location}</h2>
                <h2>{startTime}</h2>
                <h2>{endTime}</h2>
                <h2>{this.props.teaTime.attendees.length}</h2>
            </div>
        )
    }
};

export default TeaTimeItemBox;