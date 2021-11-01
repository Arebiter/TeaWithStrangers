import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session_form/signup_form_container"
import LoginFormContainer from "./session_form/login_form_container"
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import ProfileContainer from "./profile/profile_container";
import ProfileEditContainer from "./profile/profile_edit_container"


const App = () => (
    <div>
        <header className="header-title">
            <h1 className="main-title">
                <Link to="/">Tea With Strangers</Link>
            </h1>
            <GreetingContainer />
        </header>
        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/users/:userId" component={ProfileContainer} />
            <ProtectedRoute path="/users/:userId/edit" component={ProfileEditContainer} />
        </Switch>
    </div>
);

export default App;