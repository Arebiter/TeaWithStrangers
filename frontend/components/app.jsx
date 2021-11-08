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
import TeaTimesContainer from "./tea_times/tea_times_container";
import TeaTimeCreateContainer from "./tea_times/tea_time_create_form_container"
import TeaTimeEditContainer from "./tea_times/tea_time_edit_form_container"
import TeaTimeShowContainer from "./tea_time/tea_time_show_container";

const App = () => (
    <div className="main-body">
        <header className="header">
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
            <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
            <ProtectedRoute path="/users/:userId/edit" component={ProfileEditContainer} />
            <ProtectedRoute path="/teaTimes/new" component={TeaTimeCreateContainer} />
            <ProtectedRoute path="/teaTimes/:teaTimeId" component={TeaTimeShowContainer} />
            <ProtectedRoute path="/teaTimes/:teaTimeId/edit" component={TeaTimeEditContainer} />
            <Route exact path="/teaTimes" component={TeaTimesContainer} />
        </Switch>

        <section className="footer-outer">
            <Footer />
        </section>
    </div>
);

export default App;