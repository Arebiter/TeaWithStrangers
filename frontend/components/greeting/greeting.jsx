import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../util/session_api_util";


class Greeting extends React.Component {

    render() {
        const { currentUser, logout } = this.props;

        const greeting = currentUser ? (
            <div>
                <p>Welcome, {currentUser.first_name}</p>
                <button onClick={() => logout()}>Logout</button>
            </div>
        ) : (
            <div>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
            </div>
        );


        return (greeting)
    }
};

export default Greeting;