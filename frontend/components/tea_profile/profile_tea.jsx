import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import ProfileNavBar from "../profile/profile_nav";
import ProfileWelcome from "../profile/profile_welcome";


class ProfileTea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPrev: false
        }
        this.updateShowPrev = this.updateShowPrev.bind(this);
        this.leaveTeaTime = this.leaveTeaTime.bind(this);
    }

    leaveTeaTime(teaId, userId) {
        const attending = this.props.attendances.find(attendance => (
            (attendance.user_id === userId) && (attendance.teatime_id === teaId)
        ))
        this.props.deleteAttendance(attending.id);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
        this.props.fetchTeaTimes();
        if (this.props.pageType === "Joined") {
            this.props.fetchAttendances();
        }
    }

    updateShowPrev() {
        if (this.state.showPrev === false) {
            this.setState({ showPrev: true })
        } else {
            this.setState({ showPrev: false })
        }
    };

    render() {
        if (this.props.tea_times.length === 0) {
            return null;
        }
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //add 1 to index to get current month
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        };
        if (mm < 10) {
            mm = '0' + mm
        };

        today = yyyy + '-' + mm + '-' + dd;
        const { tea_times, currentUser, pageType, attendances } = this.props;

        //get the teas hosted by the logged in user
        //filter hosted teas to upcoming teas and previously hosted teas
        const hostedTeas = tea_times.filter(tea_time => (currentUser.id === tea_time.host_id));
        const hostedBefore = hostedTeas.filter(oldTea => (
            Date.parse(oldTea.date) < Date.parse(today)
        ));
        const hostedUpcoming = hostedTeas.filter(newTea => (
            Date.parse(newTea.date) > Date.parse(today)
        ));

        //get the teas the logges in user is attending
        //filter teas based on upcoming and previously joined teas
        const joinedTeas = tea_times.filter(tea_time => (tea_time.attendees.includes(currentUser.id)));
        const joinedBefore = joinedTeas.filter(oldTea => (
            Date.parse(oldTea.date) < Date.parse(today)
        ));
        const joinedUpcoming = joinedTeas.filter(newTea => (
            Date.parse(newTea.date) > Date.parse(today)
        ));

        // const teaDate = moment(teaTime.date).format("dddd, MMMM Do YYYY")
        // const teaStart_pre = new Date("1970-01-01T" + teaTime.start_time)
        // const teaEnd_pre = new Date("1970-01-01T" + teaTime.end_time)
        // const teaStart = moment(teaStart_pre).format('hh:mm a')
        // const teaEnd = moment(teaEnd_pre).format('hh:mm a')
        //have a link to edit upcoming hosted teas
        //have a button to leave upcoming joined teas - or have a link to the teashow, then to leave
        const pageContent = pageType === "Joined" ? (
            this.state.showPrev === false ? (
                <div className="profile-info-container">
                    {
                        joinedUpcoming.map((tea, id) => (
                            <div className="tea-item" key={id} >
                                <div className="tea-details">
                                    <Link to={`/teaTimes/${tea.id}`}>

                                        <p className="tea-date">{moment(tea.date).format("dddd, MMMM Do")}</p>
                                        <p className="tea-time">
                                            {
                                                moment(new Date("1970-01-01T" + tea.start_time)).format('hh:mm a')
                                            } to {
                                                moment(new Date("1970-01-01T" + tea.end_time)).format('hh:mm a')
                                            }
                                        </p>
                                        <p>{tea.location}</p>
                                    </Link>
                                </div>
                                <button className="tea-btn" onClick={() => this.leaveTeaTime((tea.id), (currentUser.id))}>Leave Tea Time</button>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="profile-info-container">
                    {
                        joinedBefore.map((tea, id) => (
                            <div className="tea-item" key={id}>
                                <div className="tea-details">


                                    <p className="tea-date">{moment(tea.date).format("dddd, MMMM Do")}</p>
                                    <p className="tea-time">
                                        {
                                            moment(new Date("1970-01-01T" + tea.start_time)).format('hh:mm a')
                                        } to {
                                            moment(new Date("1970-01-01T" + tea.end_time)).format('hh:mm a')
                                        }
                                    </p>
                                    <p>{tea.location}</p>

                                </div>
                                <div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        ) : (
            this.state.showPrev === false ? (
                <div className="profile-info-container">
                    {
                        hostedUpcoming.map((tea, id) => (
                            <div className="tea-item" key={id}>
                                <div className="tea-details">
                                    <Link to={`/teaTimes/${tea.id}`}>

                                        <p className="tea-date">{moment(tea.date).format("dddd, MMMM Do")}</p>
                                        <p className="tea-time">
                                            {
                                                moment(new Date("1970-01-01T" + tea.start_time)).format('hh:mm a')
                                            } to {
                                                moment(new Date("1970-01-01T" + tea.end_time)).format('hh:mm a')
                                            }
                                        </p>
                                        <p>{tea.location}</p>
                                    </Link>
                                </div>
                                <div className="tea-btn">
                                    <Link to={`/teaTimes/${tea.id}/edit`}><p className="tea-btn-text">Edit</p></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <div className="profile-info-container">
                    {
                        hostedBefore.map((tea, id) => (
                            <div className="tea-item" key={id}>
                                <div className="tea-details">


                                    <p className="tea-date">{moment(tea.date).format("dddd, MMMM Do")}</p>
                                    <p className="tea-time">
                                        {
                                            moment(new Date("1970-01-01T" + tea.start_time)).format('hh:mm a')
                                        } to {
                                            moment(new Date("1970-01-01T" + tea.end_time)).format('hh:mm a')
                                        }
                                    </p>
                                    <p>{tea.location}</p>

                                </div>
                                <div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )
        );

        const switchBtn = this.state.showPrev === false ? (
            <button onClick={this.updateShowPrev}>Show Previous Tea Times</button>
        ) : (
            <button onClick={this.updateShowPrev}>Show Upcoming Tea Times</button>
        );

        const leftSide = (pageType === "Joined") ? (
            <h1>Joined Tea Times</h1>
        ) : (
            <h1>Hosted Tea Times</h1>
        );


        // console.log(this.props)
        return (
            <section className="profile-main-section">
                <ProfileNavBar user={this.props.currentUser} />
                <div className="profile-tea container">
                    <div className="profile-tea-left">
                        <div className="profile-tea-left-info">
                            {leftSide}
                            {switchBtn}
                        </div>
                    </div>
                    <div className="profile-tea-right">
                        {pageContent}
                    </div>
                </div>
            </section>
        )
    }
}

export default ProfileTea;