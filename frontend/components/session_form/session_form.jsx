import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            fname: "",
            lname: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
    }

    demoUser() {
        let demo = {
            email: 'demoUser@demo.com',
            password: 'demoPassword',
        }
        this.props.processForm(demo)
    }
    componentWillUnmount() {
        this.props.removeErrors();
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    render() {
        const { formType, errors } = this.props;
        const { email, password, fname, lname } = this.state;


        // const errorMessages = errors ? (
        //     <div>
        //         <ul>
        //             {errors.map((error, id) => <li key={id} className="errors">{error}</li>)}
        //         </ul>
        //     </div>
        // ) : (
        //     null
        // );

        const altLink = (formType === "Login") ? (
            <div>
                <Link to="/signup">If you've never signed up before, click here and do that</Link>
            </div>
        ) : (
            <div>
                <Link to="/login">If you've already done this before, click here to log in</Link>
            </div>
        );

        const demoLogin = (formType === "Login") ? (
            <div className="demo-login-link">
                <p>Just here to look? &nbsp;
                    <span onClick={this.demoUser}>Sign in as guest</span>
                </p>
            </div>
        ) : (
            <div>
            </div>
        );

        const firstName = (formType === "Sign Up") ? (
            <label className="session-form-field-label">
                <input className={errors.includes("Fname can't be blank") ? "session-form-field red" : "session-form-field"} type="text" onChange={this.update("fname")} value={fname} placeholder="First name" />
                <p className="session-form-error">
                    {errors.includes("Fname can't be blank") ? "First name can't be blank" : ""}
                </p>
            </label>
        ) : (
            <div></div>
        );

        const lastName = (formType === "Sign Up") ? (
            <label className="session-form-field-label">
                <input className={errors.includes("Lname can't be blank") ? "session-form-field red" : "session-form-field"} type="text" onChange={this.update("lname")} value={lname} placeholder="Last name" />
                <p className="session-form-error">
                    {errors.includes("Lname can't be blank") ? "Last name can't be blank" : ""}
                </p>
            </label>
        ) : (
            <div></div>
        );

        const passwordInput = (formType === "Sign Up") ? (
            <label className="session-form-field-label">
                <input className={errors.includes("Password is too short (minimum is 6 characters)") || errors.includes("Invalid email/password combination") ? "session-form-field red" : "session-form-field"} type="password" onChange={this.update("password")} value={password} placeholder="Password (at least 6 characters you won't forget)" />
                <p className="session-form-error">
                    {errors.includes("Password is too short (minimum is 6 characters)") ? "Password is too short (minimum is 6 characters)" : ""}
                </p>
                <p className="session-form-error">
                    {errors.includes("Invalid email/password combination") ? "This password is invalid" : ""}
                </p>
            </label>
        ) : (
            <label className="session-form-field-label">
                <input className={errors.includes("Password is too short (minimum is 6 characters)") || errors.includes("Invalid email/password combination") ? "session-form-field red" : "session-form-field"} type="password" onChange={this.update("password")} value={password} placeholder="Password" />
                <p className="session-form-error">
                    {errors.includes("Password is too short (minimum is 6 characters)") ? "Password is too short (minimum is 6 characters)" : ""}
                </p>
                <p className="session-form-error">
                    {errors.includes("Invalid email/password combination") ? "This password is invalid" : ""}
                </p>
            </label>
        );

        const sessionFormHeader = (formType === "Sign Up") ? (
            <div className="session-form-header">
                <h2>
                    Join for tea time
                </h2>
                <p>
                    1000s of strangers across the world have sat together for conversations. Create an account and you'll be on your way to join the community.
                </p>
            </div>
        ) : (
            <div className="session-form-header">
                <h2>
                    Hey stranger!
                </h2>
                <p>
                    It's good to have you back. Sign in here and sign up for your next tea time!
                </p>
            </div>
        );

        return (
            <section className="session-form-section">
                <div className="session-form-container container">
                    <div className="session-form-header-div">
                        {sessionFormHeader}
                    </div>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <div className="session-form-inputs">
                            {firstName}
                            {lastName}
                            <label className="session-form-field-label">
                                <input className={errors.includes("Email can't be blank") ||
                                    errors.includes("Email is invalid") ||
                                    errors.includes("Email has already been taken") ||
                                    errors.includes("Invalid email/password combination") ?
                                    "session-form-field red" : "session-form-field"}
                                    type="text" onChange={this.update("email")} value={email} placeholder="Email address" />
                                <p className="session-form-error">
                                    {errors.includes("Email can't be blank") ? "Email can't be blank" : ""}
                                </p>
                                <p className="session-form-error">
                                    {errors.includes("Email is invalid") ? "Email is invalid" : ""}
                                </p>
                                <p className="session-form-error">
                                    {errors.includes("Email has already been taken") ? "Email has already been taken" : ""}
                                </p>
                                <p className="session-form-error">
                                    {errors.includes("Invalid email/password combination") ? "This email is invalid" : ""}
                                </p>
                            </label>
                            {passwordInput}
                            {/* {errorMessages} */}
                        </div>
                        <div className="session-button-div">
                            <button className="session-button">{formType}</button>
                        </div>
                    </form>
                    <div className="demo-login">
                        {demoLogin}
                        {altLink}
                    </div>
                </div>
            </section>
        )
    }
};

export default SessionForm;