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
        this.props.deleteReview(this.props.review.id);
    }

    render() {
        console.log(this.props);
        const { review, host, reviewer, deleteReview, currentUser, userReviews } = this.props;
        const userReviewsIdArray = userReviews.map(review => review.id);
        // if (!userReviewsIdArray.includes(review.id) && (!reviewer === "")) {
        //     return null;
        // }
        // const userName = (this.props.host === "") ? (
        //     <p>Reviewer: {reviewer.fname} {reviewer.lname}</p>
        // ) : (
        //     <p>Host: {host.fname} {host.lname}</p>
        // );
        const rating = review.rating;
        console.log(rating);

        const deleteButton = (review.user_id === currentUser.id) ? (
            <button onClick={this.removeReview}> Delete</button >
        ) : (
            null
        )
        return (
            <section className="review-item">
                <div className="review-item-name-div">
                    {/* {userName} */}
                    <p><span>Host:</span> Name</p>
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