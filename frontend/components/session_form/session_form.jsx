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

        const errorMessages = errors ? (
            <div>
                <ul>
                    {errors.map(error => <li className="errors">{error}</li>)}
                </ul>
            </div>
        ) : (
            null
        );

        const altLink = (formType === "Login") ? (
            <Link className="session-button" to="/signup">Sign Up</Link>
        ) : (
            <Link className="session-button" to="/login">Login</Link>
        );

        const demoLogin = (formType === "Login") ? (
            <p>Just here to look? &nbsp;
                <span onClick={this.demoUser}>Guest User</span>
            </p>
        ) : (
            null
        );

        const firstName = (formType === "Sign Up") ? (
            <label>First Name
                <input className="session-form-field" type="text" onChange={this.update("fname")} value={fname} />
            </label>
        ) : (
            <div></div>
        );

        const lastName = (formType === "Sign Up") ? (
            <label>Last Name
                <input className="session-form-field" type="text" onChange={this.update("lname")} value={lname} />
            </label>
        ) : (
            <div></div>
        );

        return (
            <div className="container">
                <div className="session-form-container">
                    <h2 className="session-formtype">{formType}</h2>
                    <form className="session-form" onSubmit={this.handleSubmit}>
                        <div className="session-form-input">
                            <label>Email
                                <input className="session-form-field" type="text" onChange={this.update("email")} value={email} />
                            </label>
                            <label>Password
                                <input className="session-form-field" type="password" onChange={this.update("password")} value={password} />
                            </label>
                            {firstName}
                            {lastName}
                            {errorMessages}
                        </div>
                        <div className="session-button-div">
                            {altLink}
                            <button className="session-button">{formType}</button>
                        </div>
                    </form>
                    <div className="demo-login">
                        {demoLogin}
                    </div>
                </div>
            </div>
        )
    }
};

export default SessionForm;