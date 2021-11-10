import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ProgressBar from "../tea_time/progress_bar";

class TeaTimeItemBox extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     console.log(this.props);
    //     // this.props.fetchUser(this.props.teaTime.host_id);
    // }


    render() {
        if (!this.props.teaTime) {
            return null;
        }
        const { teaTime, users } = this.props;
        // debugger
        const teaDate = moment(teaTime.date).format("dddd, MMMM Do YYYY")
        const teaStart_pre = new Date("1970-01-01T" + teaTime.start_time)
        const teaEnd_pre = new Date("1970-01-01T" + teaTime.end_time)
        const teaStart = moment(teaStart_pre).format('hh:mm a')
        const teaEnd = moment(teaEnd_pre).format('hh:mm a')
        return (
            <Link to={`/teaTimes/${teaTime.id}`} className="tea-time-item-box" >
                <img src={users.photoUrl} />
                <h2>{teaTime.location}</h2>
                <h2>{teaDate}</h2>
                <h2>{teaStart}</h2>
                <h2>{teaEnd}</h2>
                <ProgressBar attendees={teaTime.attendees} />
            </Link>
        )
    }
};

export default TeaTimeItemBox;