import React from "react";
import { Link } from "react-router-dom";


class ProfileWelcome extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="profile-welcome-div">
                <h2 className="profile-welcome">
                    Welcome home,
                    <span> {this.props.user.fname}!</span>
                </h2>
                <p>What are you grateful for today?</p>
            </div>
        )
    }
}

export default ProfileWelcome;