import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ProgressBar from "../tea_time/progress_bar";

class TeaTimeItemBox extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     // console.log(this.props);
    //     // this.props.fetchUser(this.props.teaTime.host_id);
    // }


    render() {
        if (!this.props.teaTime) {
            return null;
        }
        const { teaTime, host } = this.props;

        const teaDateDay = moment(teaTime.date).format("dddd")
        const teaDateMonth = moment(teaTime.date).format("MMMM Do")
        const teaStart_pre = new Date("1970-01-01T" + teaTime.start_time)
        const teaEnd_pre = new Date("1970-01-01T" + teaTime.end_time)
        const teaStart = moment(teaStart_pre).format('hh:mm a')
        const teaEnd = moment(teaEnd_pre).format('hh:mm a')
        return (
            <Link to={`/teaTimes/${teaTime.id}`} className="tea-time-item-box" >
                <h2>{host.fname}</h2>
                <h2>{host.lname}</h2>
                <h2>{teaTime.location}</h2>
                <h2>{teaDateDay}</h2>
                <h2>{teaDateMonth}</h2>
                <h2>{teaStart}</h2>
                <h2>{teaEnd}</h2>
                <ProgressBar attendees={teaTime.attendees} />
            </Link>
        )
    }
};

export default TeaTimeItemBox;