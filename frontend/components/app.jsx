import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session_form/signup_form_container"
import LoginFormContainer from "./session_form/login_form_container"
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import ProfileContainer from "./profile/profile_container";
import ProfileEditContainer from "./profile/profile_edit_container"
import Footer from "./footer/footer";

const App = () => (
    <div className="main-body">
        <header className="header-title">
            <div className="container">
                <h1 className="main-title">
                    <Link to="/">Tea With Strangers</Link>
                </h1>
                <GreetingContainer />
            </div>
        </header>
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/users/:userId/edit" component={ProfileEditContainer} />
            <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
        </Switch>
        <div class="footer-outer">
            <div className="container">
                <Footer />
            </div>
        </div>
    </div>
);

export default App;