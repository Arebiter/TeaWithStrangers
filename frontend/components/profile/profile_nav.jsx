import React from "react";
import { Link } from "react-router-dom";


class ProfileNavBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="profile-nav-bar-section">
                <div className="profile-nav-bar-div container">
                    <div className="profile-nav-bar">
                        <Link className="profile-nav-link" to="/hosting">Hosting</Link>
                        <Link className="profile-nav-link" to="/joined">Joined</Link>
                        <Link className="profile-nav-link" to={`/reviews`}>Reviews</Link>
                        <Link className="profile-nav-link" to={`/users/${this.props.user.id}`}>Account</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileNavBar;