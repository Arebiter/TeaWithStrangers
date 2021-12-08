import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import ProgressBar from "./progress_bar";
import Review from "../review_page/review";


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
        this.props.fetchTeaTime(this.props.match.params.teaTimeId);
        this.props.fetchAttendances();
        this.props.fetchReviews();
        this.props.fetchUsers()
        this.setState({ teatime_id: this.props.match.params.teaTimeId });
        this.setState({ user_id: this.props.currentUser.id });
    }

    componentDidUpdate() {
        if (!this.props.teaTime) {
            this.props.fetchTeaTime(this.props.match.params.teaTimeId)
                .then(() => this.props.fetchUser(this.props.teaTime.host_id))
            this.props.fetchAttendances();
        }
    }

    joinTeaTime() {
        const attendance = Object.assign({}, this.state)
        this.props.createAttendance(attendance);
    }

    leaveTeaTime() {
        this.props.deleteAttendance(this.props.attendance.id)
    }

    render() {

        if (!this.props.teaTime) {
            return null
        }

        if (!this.props.users[this.props.teaTime.host_id]) {
            return null
        }

        // debugger
        const { teaTime, users, city, reviews, deleteReview, currentUser } = this.props;
        const allUsers = Object.values(users);
        const editBtn = (teaTime.host_id === this.props.currentUser.id) ? (
            <Link className="joinbtn btn2" to={`/teaTimes/${teaTime.id}/edit`}>Edit Tea Time</Link>
        ) : (
            null
        );

        const joinBtn = ((teaTime.host_id !== this.props.currentUser.id)) ? (
            (teaTime.attendees.length <= 6) ? (
                (teaTime.attendees.includes(this.props.currentUser.id) ? (
                    <button className="joinbtn btn2" onClick={this.leaveTeaTime}>Leave the Tea Time</button>
                ) : (
                    <button className="joinbtn" onClick={this.joinTeaTime}>Join Tea Time</button>
                ))
            ) : (
                <h2 className="joinBtn-h2">Sorry, this teatime is full</h2>
            )
        ) : (
            <h2 className="joinBtn-h2">You are the host</h2>
        );

        const photo = users[teaTime.host_id].photoUrl ? (
            <div className="profile-photo-div">
                <img className="profile-img" src={users[teaTime.host_id].photoUrl} />
            </div>
        ) : (
            <div></div>
        );


        const teaDate = moment(teaTime.date).format("dddd, MMMM Do")
        const teaStart_pre = new Date("1970-01-01T" + teaTime.start_time)
        const teaEnd_pre = new Date("1970-01-01T" + teaTime.end_time)
        const teaStart = moment(teaStart_pre).format('hh:mm a')
        const teaEnd = moment(teaEnd_pre).format('hh:mm a')

        const userReviews = Object.values(reviews).filter(review => review.user_id === currentUser.id) //find all reviews by the current user
        const userReviewsByOthers = Object.values(reviews).filter(review => review.host_id === teaTime.host_id) //find all reviews of current user by others
        const ratings = [];
        userReviewsByOthers.length > 0 ? userReviewsByOthers.forEach(review => { ratings.push(review.rating) }) : null; //get array of ratings by other users
        const averageRating = ratings.length > 0 ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10 : "-"; //get average rating number
        // console.log(averageRating);

        // debugger
        return (
            <section className="teashow-main-section">
                <div className="teashow container">
                    <div className="teashow-left">
                        <div className="teashow-info">
                            <div className="teashow-info-section">
                                <p className="teashow-title">Tea Time Details</p>
                                <p className="teashow-date">{teaDate}</p>
                                <p className="teashow-time">{teaStart} to {teaEnd}</p>
                                {/* <p>{city.city_name}</p> */}
                                <p className="teashow-loc">{teaTime.location}</p>
                                <div className="link-div">
                                    <p className="teashow-link">
                                        {`https://tinyurl.com/TeaTimeLinks/${teaTime.id}`}
                                    </p>
                                    <p className="teashow-share">Send to a friend that should be here </p>
                                </div>
                            </div>
                            <div className="teashow-progress-div">
                                <ProgressBar attendees={teaTime.attendees} />
                            </div>
                        </div>
                        <div className="teashow-btn">
                            {joinBtn}
                            {editBtn}
                        </div>
                        <div className="teashow-about">
                            <h2>What is tea time, exactly?</h2>
                            <p className="teashow-about-image">🍵</p>
                            <p>
                                Tea Time is where five-ish strangers sit at a cafe with a Host to have a two hour conversation.
                                It's not about anything in particular.
                            </p>
                            <p>
                                You're meant to know pretty much nothing about the people that come, aside from the fact that they all signed up for this — just like you.
                                It's self-selecting in that sense.
                            </p>
                            <p>
                                However, it may bring you comfort to know a little something about your Host.
                                If so, just keep reading
                            </p>
                        </div>
                    </div>
                    <div className="teashow-right">
                        <div className="teashow-host-name">
                            <div className="teashow-host-left">
                                <h1>Meet your Host, {users[teaTime.host_id].fname}</h1>
                                <p>(It'll be helpful to know what they look like when you're looking for a group of confused strangers at the cafe.)</p>
                            </div>
                            <div className="teashow-host-right">
                                <p className="teashow-host-rating">Avg Rating:
                                    <span> {averageRating}/5</span>
                                </p>
                            </div>
                        </div>
                        <div className="teashow-photo-area">
                            {photo}
                        </div>
                        <div className="profile-info-div">
                            <div className="profile-info-tag">
                                <h3>What's your story?</h3>
                                <p>{users[teaTime.host_id].bio}</p>
                            </div>
                            <div className="profile-info-tag">
                                <h3>What might we talk about?</h3>
                                <p>{teaTime.description}</p>
                            </div>
                        </div>
                        <div>
                            <ul className="reviews-list">
                                {userReviewsByOthers.map((review, id) => {
                                    const reviewer = allUsers.find(host => host.id === review.user_id);
                                    return (
                                        <li key={id}>
                                            <Review
                                                review={review}
                                                host=""
                                                reviewer={reviewer}
                                                deleteReview={deleteReview}
                                                currentUser={currentUser}
                                                userReviews={userReviews}
                                            // redirectReview={this.redirectReview}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default TeaTimeShow;