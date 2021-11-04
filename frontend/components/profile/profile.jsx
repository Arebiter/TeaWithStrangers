import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    };

    render() {
        const { fname, lname, email, bio, photoUrl, id } = this.props.user
        const info = this.props.user ? (
            <div className="container">
                <div className="profile-info-container">
                    <div>
                        <img src={photoUrl} />
                    </div>
                    <div className="profile-info-tag">Name:
                        <p className="profile-info">{fname} {lname}</p>
                    </div>
                    <div className="profile-info-tag">Email:
                        <p className="profile-info">{email}</p>
                    </div>
                    <div className="profile-info-tag">Bio:
                        <p className="profile-info">{bio}</p>
                    </div>
                </div>
                <Link className="profile-info-edit-btn" to={`/users/${id}/edit`}>Edit User Information</Link>
                <i class="fas fa-arrow-circle-up"></i>
            </div>
        ) : (
            null
        );

        return (
            info
        )
    }
};

export default Profile;