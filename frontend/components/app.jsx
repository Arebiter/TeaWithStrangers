import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from "./session_form/signup_form_container"
import LoginFormContainer from "./session_form/login_form_container"
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
        <header className="header-title">
            <h1 className="main-title">Tea With Strangers</h1>
            {/* <GreetingContainer /> */}
            <Route exact path="/" component={GreetingContainer} />
        </header>
        <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;