import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../../util/session_api_util";


class Greeting extends React.Component {

    render() {
        const { currentUser, logout } = this.props;

        const greeting = currentUser ? (
            <div className="greeting-loggedIn">
                <Link className="greeting-button" to="/">TEA TIMES</Link>
                <Link className="greeting-button" to="/">HOSTING</Link>
                <Link className="greeting-button" to={`/users/${currentUser.id}`}>DASHBOARD</Link>
                <button className="greeting-button" onClick={() => logout()}>SIGN OUT</button>
            </div>
        ) : (
            <div className="greeting-loggedOut">
                <Link className="greeting-button" to="/">TEA TIMES</Link>
                <Link className="greeting-button" to="/signup">HOSTING</Link>
                <Link className="greeting-button" to="/login">SIGN IN</Link>
                <Link className="greeting-button-signup" to="/signup">SIGN UP</Link>
            </div>
        );


        return (
            <div className="greeting">
                {greeting}
            </div>
        )
    }
};

export default Greeting;