import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
        const { email, password } = this.state;
        const errorMessages = errors ? (
            <div>
                <ul>
                    {errors.map(error => <li>{error}</li>)}
                </ul>
            </div>
        ) : (
            <div></div>
        );

        const altLink = (formType === "Login") ? (
            <Link to="/signup">Sign Up</Link>
        ) : (
            <Link to="/login">Login</Link>
        );

        return (
            <div>
                <h2>{formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Email
                        <input type="text" onChange={this.update("email")} value={email} />
                    </label>
                    <label>Password
                        <input type="password" onChange={this.update("password")} value={password} />
                    </label>
                    {errorMessages}
                    {altLink}
                    <button>{formType}</button>
                </form>
            </div>
        )
    }
};

export default SessionForm;