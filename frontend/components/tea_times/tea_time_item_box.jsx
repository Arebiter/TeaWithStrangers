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
        const teaDateMonth = moment(teaTime.date).format("MMM Do")
        const teaStart_pre = new Date("1970-01-01T" + teaTime.start_time)
        const teaEnd_pre = new Date("1970-01-01T" + teaTime.end_time)
        const teaStart = moment(teaStart_pre).format('hh:mm')
        const teaEnd = moment(teaEnd_pre).format('hh:mm a')
        return (
            <Link to={`/teaTimes/${teaTime.id}`} className="Link">
                <section className="tea-time-item-box">
                    <div className="teatime-main">
                        <div className="teatime-box-top">
                            <div className="teatime-top-time">
                                <h3>{teaDateDay}</h3>
                                <h1>{teaDateMonth}</h1>
                                <div>
                                    <h2>{teaStart}  to</h2>
                                    <h2>{teaEnd}</h2>
                                </div>
                            </div>
                            <div className="teatime-profile">
                                <div className="teatime-profile-img-div">
                                    <div>
                                        <img src={host.photoUrl} />
                                    </div>
                                    <h2>{host.fname}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="teatime-location">
                            <p>{teaTime.location}</p>
                        </div>
                    </div>
                    <div className="teatime-progress-bar-container">
                        <div className="teatime-progress-bar-div">
                            <ProgressBar attendees={teaTime.attendees} />
                        </div>
                    </div>
                </section>
            </Link>
        )
    }
};

export default TeaTimeItemBox;