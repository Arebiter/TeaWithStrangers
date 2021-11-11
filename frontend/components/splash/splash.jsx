import React from "react";
import { Link } from "react-router-dom";
// import GreetingContainer from "../greeting/greeting_container";

class Splash extends React.Component {
    render() {
        return (
            <div className="splash-container">
                <section className="splash-header-img">
                    <div className="splash-main-img-container container">
                        <h1 className="splash-main-line">Everyone is interesting</h1>
                        <span className="splash-main-subtitle">But you don't discover that when you're staring at a screen</span>
                        <Link className="splash-main-button" to="/teaTimes">LET'S GET TEA</Link>
                    </div>
                </section>
                <section className="splash-description color5">
                    <div className="splash-description-container container">
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
                                Have a real conversation
                            </h2>
                            <p className="splash-description-part-sub">
                                You talk for two hours about anything.
                            </p>
                        </div>
                        <div className="splash-description-part">
                            <h2 className="splash-description-part-main">
                                See what happens
                            </h2>
                            <p className="splash-description-part-sub">
                                That's it. No strings attached.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="splash-tea-explainer color3">
                    <div className="tea-explainer-container container">
                        <div className="tea-header">
                            <h3>SO WHY ARE THOUSANDS OF PEOPLE DOING IT?</h3>
                        </div>
                        <div className="tea-explainer">
                            <div className="tea-image-div left">
                                <img className="tea-image" src={window.weird} />
                            </div>
                            <div className="tea-explainer-section">
                                <h2>It's Weird</h2>
                                <p>
                                    Everyone at tea time is stepping a little out of their comfort zone. This makes it so much easier to actually learn something unexpected about the people around you. Because open minds are a prerequisite around here.
                                </p>
                            </div>
                        </div>
                        <div className="tea-explainer">
                            <div className="tea-explainer-section">
                                <h2>We won't meet otherwise.</h2>
                                <p>
                                    In all likelihood, our paths won’t cross for any reason. So often, we only meet people through work, school, or friends of friends. And even then, it’s questionable. So basically, we manufacture serendipity.
                                </p>
                            </div>
                            <div className="tea-image-div right">
                                <img className="tea-image" src={window.neverMeet} />
                            </div>
                        </div>
                        <div className="tea-explainer">
                            <div className="tea-image-div left">
                                <img className="tea-image" src={window.highFive} />
                            </div>
                            <div className="tea-explainer-section">
                                <h2>Your hands are made for high fiving!</h2>
                                <p>
                                    And your eyes are made…for eye contact! Real humans are so much cooler than their tweets or Instagram pictures. Tea time has real humans! #nofilter!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="splash-get-tea color5">
                    <div className="get-tea container">
                        <h2>Actually talk to people</h2>
                        <Link className="splash-link" to="/teaTimes">Let's get tea</Link>
                    </div>
                </section>
                <section className="splash-testimonials color3">
                    <div className="testimonials container">
                        <div>
                            <p>”I met people who I continue to be in touch with almost a year later, and people who I shared delightful conversations with that day but no more. Both are their own kind of fun.”
                                <span> Freia, NYC</span>
                            </p>
                        </div>
                        <div>
                            <p>”I’m not the type of person who talks to strangers. This doesn’t mean I don’t want to. Tea With Strangers just makes it easier because you know everyone there wants it too.”
                                <span> Molly, SF</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="splash-centered-img color3">
                    <div className="centered-image container">
                        <div className="centered-img-div">
                            <img className="centered-img" src={window.centered} />
                        </div>
                    </div>
                </section>
                <section className="splash-stranger color3">
                    <div className="stranger-letter container">
                        <h2>There's no such thing as a stranger</h2>
                        <div className="stranger-letter-content">
                            <div className="letter-img-div">
                                <img className="letter-img" src={window.stranger} />
                            </div>
                            <div className="letter-content-div">
                                <p>
                                    You'd never think of yourself as a stranger. But everyone else does. You know your story. Your embarrassments. Your joy. Your idiocyncrasies — the thing that make you, you. But they don't.
                                </p>
                                <p>
                                    And everyone has these — whether or not we know what they are. Everyone around you is a person, loaded with stories that you can't even begin to fathom. They're different from yours, but the fact that we all have them is what brings us together.
                                </p>
                                <p>
                                    In a stranger's story, we might discover parts of our own. And in seeing where a stranger is coming from, we might realize they're actually not so strange. But we don't discover much just by thinking about it. So let's find out.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="splash-high-five color5">
                    <div className="get-tea container">
                        <h2>Do we get to high five yet?</h2>
                        <Link className="splash-link" to="/teaTimes">Yes</Link>
                    </div>
                </section>
            </div >
        )
    }
};

export default Splash;