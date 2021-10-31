import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: ""
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
        const { email, password, first_name } = this.state;
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

        const demoLogin = (formType === "Login") ? (
            <p>Just here to look? &nbsp;
                <span onClick={this.demoUser}>Guest User</span>
            </p>
        ) : (
            null
        );

        const firstName = (formType === "Sign Up") ? (
            <label>First Name
                <input type="text" onChange={this.update("first_name")} value={first_name} />
            </label>
        ) : (
            <div></div>
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
                    {firstName}
                    {errorMessages}
                    {altLink}
                    <button>{formType}</button>
                </form>
                {demoLogin}
            </div>
        )
    }
};

export default SessionForm;