import React from "react";
import { Link } from "react-router-dom";
import ProfileNavBar from "./profile_nav";
import ProfileWelcome from "./profile_welcome";

class Profile extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    };


    render() {

        const { fname, lname, email, bio, photoUrl, id } = this.props.user
        const photo = photoUrl ? (
            <div className="profile-photo-div">
                <img className="profile-img" src={photoUrl} />
            </div>
        ) : (
            <div></div>
        );

        const info = this.props.user ? (
            <section className="profile-main-section">
                <ProfileNavBar user={this.props.user} />
                <div className="profile container">
                    <ProfileWelcome user={this.props.user} />
                    <div className="profile-info-container">
                        {photo}
                        <div className="profile-info-div">
                            <div className="profile-info-tag">
                                <h3>Name</h3>
                                <p className="profile-info">{fname} {lname}</p>
                            </div>
                            <div className="profile-info-tag">
                                <h3>Email</h3>
                                <p className="profile-info">{email}</p>
                            </div>
                            <div className="profile-info-tag">
                                <h3>Your Story</h3>
                                <p className="profile-info">{bio}</p>
                            </div>
                            <Link className="profile-info-edit-btn" to={`/users/${id}/edit`}>Edit Your Information</Link>
                        </div>
                    </div>
                </div>
            </section >
        ) : (
            null
        );

        return (
            info
        )
    }
};

export default Profile;