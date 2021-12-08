import React from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";
import ProfileNavBar from "../profile/profile_nav";
import Rating from "./rating";
// import Review from "../review_page/review";

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initialState();
        this.updateRating = this.updateRating.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    initialState = () => ({
        user_id: this.props.currentUser.id,
        host_id: "",
        rating: 0,
        review: ""
    })

    resetState = () => {
        // this.setState(this.initialState());
        document.querySelector("select").value = "DEFAULT";
        this.setState({
            rating: 0,
            host_id: "",
            review: ""
        })
    };


    handleSubmit(e) {
        e.preventDefault();
        const review = Object.assign({}, this.state);
        this.props.createReview(review);
        this.resetState();
    }

    update(field) {
        return (e) => {
            if (field === "host_id") {
                this.setState({ [field]: parseInt(e.target.value) })
            } else {
                this.setState({ [field]: e.target.value })
            }
        }
    }

    updateRating(rating) {
        this.setState({ rating: rating });
    }

    render() {

        const { currentUser, attendingTeaTimes, allHosts, allUsers, checked, availableHosts, userReviews, userReviewedHosts, userReviewsByOthers } = this.props;
        const { user_id, host_id, rating, review } = this.state;

        const availableHostsLength = availableHosts.length;

        if (!currentUser) {
            return null;
        }
        if (attendingTeaTimes.length === 0) {
            return null;
        }
        if (allUsers.length < 2) {
            return null;
        }

        if (availableHostsLength !== availableHosts.length) {
            return null;
        }
        // console.log(this.state);
        // console.log(this.state.rating);
        return (
            <div className="review-form-div">
                <form className="review-form" onSubmit={this.handleSubmit}>
                    <div className="review-form-top">
                        <h3>Review</h3>
                    </div>
                    <div className="review-form-inputs">
                        <div className="review-form-tag">
                            <h3>Select A Host</h3>
                            <div>
                                <select className="host-select" onChange={this.update("host_id")} defaultValue="DEFAULT">
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
                        <div className="review-form-tag">
                            <h3>Rating</h3>
                            <Rating updateRating={this.updateRating} ratingState={this.state.rating} />
                            {/* <input className="profile-form-field" type="text" onChange={this.update("fname")} value={fname} /> */}
                        </div>
                        <div className="review-form-tag">
                            <h3>Review</h3>
                            <textarea className="review-form-field" onChange={this.update("review")} value={review} cols="30" rows="9.8"></textarea>
                            {/* <input className="review-form-field" type="textarea" onChange={this.update("review")} value={review} /> */}
                        </div>
                        <div className="review-btn-container">
                            <button className="review-button">Submit Review</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }


}

export default ReviewForm;