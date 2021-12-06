import React from "react";
// import ReviewFormContainer from "../review_form/review_form_container";
import Review from "./review";
import ReviewForm from "../review_form/review_form";
import ProfileNavBar from "../profile/profile_nav";

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
        // this.props.deleteReview();
    }

    // redirectReview() {
    //     this.props.history.push("./reviews");
    // }

    render() {
        // console.log(this.props);
        if (!this.props.currentUser) {
            return null;
        }
        console.log(this.props);
        if (this.props.attendingTeaTimes.length === 0) {
            return null;
        }
        if (this.props.allUsers.length === 0) {
            return null;
        }

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
            createReview
        } = this.props;

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
                        // redirectReview={this.redirectReview}
                        />

                        <ul className="reviews-list">
                            {userReviews.map((review, id) => {
                                const host = allHosts.find(host => host.id === review.host_id);
                                return (
                                    <li key={id}>
                                        <Review review={review} host={host} reviewer="" deleteReview={deleteReview} currentUser={currentUser} userReviews={userReviews} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="reviews right">
                        <h3 className="review-title">Reviews Of You</h3>
                        <ul className="reviews-list">
                            {userReviewsByOthers.map((review, id) => {
                                const reviewer = allUsers.find(host => host.id === review.user_id);
                                return (
                                    <li key={id}>
                                        <Review review={review} host="" reviewer={reviewer} deleteReview={deleteReview} currentUser={currentUser} userReviews={userReviews} />
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