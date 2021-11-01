import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    };

    render() {
        const { user } = this.props
        return (
            <div className="container">
                <div className="profile-info-container">
                    <div className="profile-info-tag">Name:
                        <p className="profile-info">{user.fname} {user.lname}</p>
                    </div>
                    <div className="profile-info-tag">Email:
                        <p className="profile-info">{user.email}</p>
                    </div>
                    <div className="profile-info-tag">Bio:
                        <p className="profile-info">{user.bio}</p>
                    </div>
                </div>
                <Link className="profile-info-edit-btn" to={`/users/${user.id}/edit`}>Edit User Information</Link>
            </div>
        )
    }
};

export default Profile;