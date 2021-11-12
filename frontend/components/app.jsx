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
import HostedTeaContainer from "./tea_profile/hosted_tea_container";
import JoinedTeaContainer from "./tea_profile/joined_tea_container";
import NotFound from "./not_found/not_found";
import About from "./about/about";

const App = () => (
    <div className="main-body">
        <header className="header">
            <div className="container">
                <h1 className="main-title">
                    <Link to="/"><img src={window.logo} /></Link>
                </h1>
                <GreetingContainer />
            </div>
        </header>

        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
            <ProtectedRoute exact path="/users/:userId/edit" component={ProfileEditContainer} />
            <ProtectedRoute exact path="/teaTimes/new" component={TeaTimeCreateContainer} />
            <ProtectedRoute exact path="/teaTimes/:teaTimeId" component={TeaTimeShowContainer} />
            <ProtectedRoute exact path="/teaTimes/:teaTimeId/edit" component={TeaTimeEditContainer} />
            <ProtectedRoute exact path="/hosting" component={HostedTeaContainer} />
            <ProtectedRoute exact path="/joined" component={JoinedTeaContainer} />
            <Route exact path="/teaTimes" component={TeaTimesContainer} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>

        <section className="footer-outer">
            <Footer />
        </section>
    </div>
);

export default App;