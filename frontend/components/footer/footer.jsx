import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-links">
                        <ul>
                            <li><Link to="/">About</Link></li>
                            <li><Link to="/">Hosting</Link></li>
                            <li><Link to="/">Tea Times</Link></li>
                            <li><Link to="/">GitHub</Link></li>
                            <li><Link to="/">LinkedIn</Link></li>
                        </ul>
                        <ul>
                            <li><Link to="/">Terms of Service</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
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