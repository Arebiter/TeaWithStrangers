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
            profile_photo: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    componentDidMount() {
        this.props.fetchUser(this.props.user.id)
    };


    handleFile(e) {
        this.setState({ profile_photo: e.currentTarget.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();
        // const user = Object.assign({}, this.state);
        const formData = new FormData();
        formData.append("user[id]", this.state.id);
        formData.append("user[email]", this.state.email);
        formData.append("user[fname]", this.state.fname);
        formData.append("user[lname]", this.state.lname);
        formData.append("user[bio]", this.state.bio);
        if (this.state.profile_photo) {
            formData.append("user[profile_photo]", this.state.profile_photo)
        }
        this.props.updateUser(formData);
        this.props.history.push(`/users/${this.props.user.id}`);
    }


    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    };

    render() {
        console.log(this.state);
        const { email, fname, lname, bio } = this.state
        return (
            <div className="container">
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
                    <label>Upload Profile Image
                        <input type="file" onChange={this.handleFile} />
                    </label>
                    <div className="profile-edit-buttn-container">
                        <button className="session-button">Submit Changes</button>
                        <Link className="session-button" to={`/users/${this.props.user.id}`}>Cancel Changes</Link>
                    </div>
                </form>
            </div>
        )
    }
};

export default ProfileEditForm;