import React from "react";
import { Link } from "react-router-dom";


class NotFound extends React.Component {
    render() {
        return (
            <section className="not-found">
                <div className="not-found-container container">
                    <h1>Whoops, this page doesn't exist...</h1>
                    <p>Please click
                        <span className="not-found-link">
                            <Link to="/teaTimes"> here </Link>
                        </span>
                        to look for Tea Times
                    </p>
                </div>
            </section>

        )
    }
}

export default NotFound;