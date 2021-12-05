import React from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";
import ProfileNavBar from "../profile/profile_nav";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
    }

    componentDidMount() {
        this.props.fetchTeaTimes();
        this.props.fetchUsers();
        this.props.fetchReviews();
        this.props.fetchAttendances();
        this.setState({ user_id: this.props.currentUser.id })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        // console.log(this.props);
        if (!this.props.currentUser) {
            return null;
        }
        console.log(this.props);
        if (this.props.attendingTeaTimes.length === 0) {
            return null;
        }
        // if (this.props.allReviews.length === 0) {
        //     return null;
        // }
        // console.log(this.props.attendances);
        const { currentUser, attendingTeaTimes, availableHosts, userReviews, userReviewedHosts, userReviewsByOthers } = this.props;
        const { user_id, host_id, rating, review } = this.state;
        return (
            <section className="profile-main-section">
                <ProfileNavBar user={currentUser} />
                <div className="profile container">
                    <form className="profile-edit-form" onSubmit={this.handleSubmit}>
                        <h2>Your Reviews</h2>
                        <div className="profile-edit-form-top">
                            <h3>Review</h3>
                        </div>
                        <div className="profile-edit-inputs">
                            <div className="tea-time-edit-info-tag">
                                <h3>Select A Host</h3>
                                <div>
                                    <select className="city-select" onChange={this.update("host_id")} defaultValue={"DEFAULT"}>
                                        <option value="DEFAULT" disabled>Select A Host</option>
                                        {
                                            availableHosts.map((host, id) => {
                                                return (
                                                    <option key={id} value={host.id}>{host.fname} {host.lname}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="profile-edit-info-tag">
                                <h3>Rating</h3>
                                {/* <input className="profile-form-field" type="text" onChange={this.update("fname")} value={fname} /> */}
                            </div>
                            <div className="profile-edit-info-tag">
                                <h3>Review</h3>
                                <input className="profile-form-field" type="text" onChange={this.update("review")} value={review} />
                            </div>
                            <div className="profile-edit-btn-container">
                                <button className="session-button">Submit Review</button>
                                {/* <Link className="session-button" to={`/users/${this.props.user.id}`}>Cancel Changes</Link> */}
                            </div>
                        </div>
                    </form>
                </div>
                <p>This is the review form</p>
            </section>
        )
    }


}

export default ReviewForm;