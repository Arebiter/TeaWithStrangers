import React from "react";
import ReactDOM from "react-dom";
import { signUp, login, logout } from "./util/session_api_util"

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root")
    // window.login = login;
    // window.signUp = signUp;
    // window.logout = logout;

    ReactDOM.render(<h1>Welcome</h1>, root)
});