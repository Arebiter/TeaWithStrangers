import React from "react";
// import ReviewFormContainer from "../review_form/review_form_container";
import Review from "./review";
import ReviewForm from "../review_form/review_form";
import ProfileNavBar from "../profile/profile_nav";
import { fetchReviews } from "../../actions/review_actions";

class Reviews extends React.Component {
    constructor(props) {
        super(props);
        // this.redirectReview = this.redirectReview.bind(this);
    }

    componentDidMount() {
        this.props.fetchTeaTimes();
        this.props.fetchUsers();
        this.props.fetchReviews();
        this.props.fetchAttendances();
    }

    // redirectReview() {
    //     this.props.history.push("./reviews");
    // };

    render() {
        const {
            currentUser,
            attendingTeaTimes,
            allHosts,
            allUsers,
            availableHosts,
            userReviews,
            userReviewedHosts,
            userReviewsByOthers,
            deleteReview,
            createReview,
            review
        } = this.props;

        if (!currentUser) {
            return null;
        }
        if (attendingTeaTimes.length === 0) {
            return null;
        }
        if (allUsers.length === 0) {
            return null;
        }

        const ratings = [];
        userReviewsByOthers.length > 0 ? userReviewsByOthers.forEach(review => { ratings.push(review.rating) }) : null; //get array of ratings by other users
        const averageRating = ratings.length > 0 ? Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10 : 0; //get average rating number
        return (
            <section className="reviews-section">
                <ProfileNavBar user={currentUser} />
                <div className="reviews-container container">
                    <div className="reviews left">
                        <h3 className="review-title">Your Reviews</h3>
                        <ReviewForm
                            currentUser={currentUser}
                            attendingTeaTimes={attendingTeaTimes}
                            allHosts={allHosts}
                            allUsers={allUsers}
                            availableHosts={availableHosts}
                            userReviews={userReviews}
                            userReviewedHosts={userReviewedHosts}
                            userReviewsByOthers={userReviewsByOthers}
                            createReview={createReview}
                            redirectReview={this.redirectReview}
                            review={review}
                            fetchReviews={fetchReviews}
                        />

                        <ul className="reviews-list">
                            {userReviews.map((review, id) => {
                                const host = allHosts.find(host => host.id === review.host_id);
                                return (
                                    <li key={id}>
                                        <Review
                                            review={review}
                                            host={host}
                                            reviewer=""
                                            deleteReview={deleteReview}
                                            currentUser={currentUser}
                                            userReviews={userReviews}
                                            redirectReview={this.redirectReview}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="reviews right">
                        <div className="reviews-top">
                            <h3 className="review-title">Reviews Of You</h3>
                            <h3 className="review-title">
                                <span>Avg Rating: </span>
                                {averageRating}
                            </h3>
                        </div>
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
                                            redirectReview={this.redirectReview}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }

}

export default Reviews;