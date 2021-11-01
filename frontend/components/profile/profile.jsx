import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
    render() {
        const { fetchUser, updateUser, user } = this.props
        return (
            <div>
                <p>profile</p>
                <Link to={`/users/${user.id}/edit`}>Edit User Information</Link>
            </div>
        )
    }
};

export default Profile;