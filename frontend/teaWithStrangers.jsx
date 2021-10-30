import React from "react";
import ReactDOM from "react-dom";
import { signup, login, logout } from "./actions/session_actions"
import configureStore from "./store/store";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    const store = configureStore();

    // window.store = store;
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;

    ReactDOM.render(<Root store={store} />, root)
});