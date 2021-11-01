import React from "react";
import { Link } from "react-router-dom";
// import GreetingContainer from "../greeting/greeting_container";

class Splash extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="splash-main-img-container">
                    <h1 className="splash-main-line">Everyone is interesting</h1>
                    <span className="splash-main-subtitle">But you don't discover that when you're staring at a screen</span>
                    <Link className="splash-main-button" to="/">LET'S GET TEA</Link>
                </div>
                <div className="splash-description-container">
                    <div className="splash-description-part">
                        <h2 className="splash-description-part-main">
                            Show up for tea time
                        </h2>
                        <p className="splash-description-part-sub">
                            You and a few other join a host
                        </p>
                    </div>
                    <div className="splash-description-part">
                        <h2 className="splash-description-part-main">
                            Show up for tea time
                        </h2>
                        <p className="splash-description-part-sub">
                            You and a few other join a host
                        </p>
                    </div>
                    <div className="splash-description-part">
                        <h2 className="splash-description-part-main">
                            Show up for tea time
                        </h2>
                        <p className="splash-description-part-sub">
                            You and a few other join a host
                        </p>
                    </div>
                </div>
                <div className="tea-explainer-container">
                    <div className="tea-explainer">
                        <h3>SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>
                    </div>
                    <div className="tea-explainer">
                        <img></img>
                        <div className="tea-explainer-section">It's Weird</div>
                    </div>
                    <div className="tea-explainer">
                        <div className="tea-explainer-section">It's Weird</div>
                        <img></img>
                    </div>
                    <div className="tea-explainer">
                        <img></img>
                        <div className="tea-explainer-section">It's Weird</div>
                    </div>
                    <div className="tea-explainer">
                        <div className="tea-explainer-section">It's Weird</div>
                        <img></img>
                    </div>
                </div>
            </div>
        )
    }
};

export default Splash;