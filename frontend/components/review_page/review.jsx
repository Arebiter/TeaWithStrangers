import React from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";
import ProfileNavBar from "../profile/profile_nav";
import Rating from "../review_form/rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";



class Review extends React.Component {
    constructor(props) {
        super(props);
        this.removeReview = this.removeReview.bind(this);

    }

    removeReview(e) {
        e.preventDefault;
        const review = this.props.userReviews.find(review => ((review.id === this.props.review.id)));
        // console.log(review.id);
        this.props.deleteReview(review.id);
        this.props.redirectReview();
    }

    render() {
        // console.log(this.props);
        const { review, host, reviewer, deleteReview, currentUser, userReviews } = this.props;
        // const userReviewsIdArray = userReviews.map(review => review.id);
        if (host === undefined || reviewer === undefined) {
            return null;
        }
        // console.log(review.id);
        const userName = (this.props.host === "") ? (
            <p><span>Reviewer:</span> {reviewer.fname} {reviewer.lname}</p>
        ) : (
            <p><span>Host:</span> {host.fname} {host.lname}</p>
        );
        const rating = review.rating;
        // console.log(rating);

        const deleteButton = (review.user_id === currentUser.id) ? (
            <button className="review-delete-btn" onClick={this.removeReview}> Delete</button >
        ) : (
            null
        )
        return (
            <section className="review-item">
                <div className="review-item-name-div">
                    {userName}
                    {deleteButton}
                </div>
                <ul className="review-item-rating-div">
                    {[...Array(5)].map((star, id) => {
                        const ratingVal = id + 1
                        return (
                            <li key={id} className="review-item-rating">
                                {ratingVal <= rating ? (
                                    <AiFillStar className="star" />
                                ) : (
                                    <AiOutlineStar className="star" />
                                )}
                            </li>
                        )
                    })}
                </ul>
                <div className="review-item-review-div">
                    <p>{review.review}</p>
                </div>
            </section>
        )
    }
}

export default Review