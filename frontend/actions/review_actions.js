import * as ReviewUtil from "../util/review_util";

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const REMOVE_REVIEW_ERRORS = 'REMOVE_REVIEW_ERRORS';


const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
};

const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
};

const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
};

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const removeReviewErrors = () => ({
    type: REMOVE_REVIEW_ERRORS
});


export const fetchReviews = () => dispatch => {
    return ReviewUtil.fetchReviews()
        .then(reviews => dispatch(receiveReviews(reviews)),
            errors => dispatch(receiveReviewErrors(errors.responseJSON)))
};

export const fetchReview = (reviewId) => dispatch => {
    return ReviewUtil.fetchReview(reviewId)
        .then(review => dispatch(receiveReview(review)),
            errors => dispatch(receiveReviewErrors(errors.responseJSON)))
};

export const createReview = (review) => dispatch => {
    return ReviewUtil.createReview(review)
        .then((review) => dispatch(receiveReview(review)),
            errors => dispatch(receiveReviewErrors(errors.responseJSON)))
};

export const updateReview = (review) => dispatch => {
    return ReviewUtil.updateReview(review)
        .then((review) => dispatch(receiveReview(review)),
            errors => dispatch(receiveReviewErrors(errors.responseJSON)))
};

export const deleteReview = (reviewId) => dispatch => {
    return ReviewUtil.destroyReview(reviewId)
        .then(() => dispatch(removeReview(reviewId)),
            errors => dispatch(receiveReviewErrors(errors.responseJSON)))
};