import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer container">
                <div className="footer-content">
                    <div className="footer-links">
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/teaTimes/new">Hosting</Link></li>
                            <li><Link to="/teaTimes">Tea Times</Link></li>
                            <li><a href="http://www.teawithstrangers.com/" target="_blank">Original Site</a></li>

                        </ul>
                        <ul>
                            <li><a href="https://www.pasandharmasena.com/" target="_blank">Porfolio</a></li>
                            <li><a href="https://github.com/Arebiter/TeaWithStrangers" target="_blank">GitHub</a></li>
                            <li><a href="https://www.linkedin.com/in/pasan-dharmasena-135507159/" target="_blank">LinkedIn</a></li>
                            <li><a href="https://angel.co/u/pasan-dharmasena/" target="_blank">AngelList</a></li>
                        </ul>
                    </div>
                    <div className="footer-message">
                        <p>
                            Tea With Strangers is all about making our cities feel more like neighborhoods. We're more "connected" than ever before, but we're also more alone. And all we want to do is bring people together because, well, the world is better that way.
                        </p>
                        <p>
                            We're not doing anything groundbreaking. We're creating something that would've been incredibly unnecessary 20 years ago. But while we get busier, it's easy to forget the value of a conversation for no reason. A conversation that's intentionally unintentional.
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;