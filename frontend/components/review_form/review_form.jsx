import React from "react";
import { Link } from "react-router-dom";
import { deleteReview } from "../../actions/review_actions";


class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.review;
    }

    componentDidMount() {
        this.props.fetchTeaTimes();
        this.props.fetchUsers();
        this.setState({ user_id: this.props.currenUser.id })
    }


    render() {
        return (
            <div>
                <p>This is the review form</p>
                <p>currentUser: {this.props.currenUser.fname}</p>
                <p>host being reviews: {this.props.host.fname}</p>
            </div>
        )
    }


}

export default ReviewForm;