import React from "react";
import { Link } from "react-router-dom";

class ProfileEditForm extends React.Component {
    constructor(props) {
        super(props);
        const { user } = this.props
        this.state = {
            id: user.id,
            email: user.email,
            fname: user.fname,
            lname: user.lname,
            bio: user.bio,
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        debugger
        this.props.updateUser(user);
        this.props.history.push(`/users/${this.props.user.id}`);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    render() {
        const { email, fname, lname, bio } = this.state
        return (
            <form className="profile-edit-form" onSubmit={this.handleSubmit}>
                <label className="profile-edit-info-tag">Email
                    <input className="session-form-field" type="text" onChange={this.update("email")} value={email} />
                </label>
                <label className="profile-edit-info-tag">First Name
                    <input className="session-form-field" type="text" onChange={this.update("fname")} value={fname} />
                </label>
                <label className="profile-edit-info-tag">Last Name
                    <input className="session-form-field" type="text" onChange={this.update("lname")} value={lname} />
                </label>
                <label className="profile-edit-info-tag">Bio
                    <textarea onChange={this.update("bio")} value={bio}></textarea>
                </label>
                <div className="profile-edit-buttn-container">
                    <button className="session-button">Submit Changes</button>
                    <Link className="session-button" to={`/users/${this.props.user.id}`}>Cancel Changes</Link>
                </div>
            </form>
        )
    }
};

export default ProfileEditForm;