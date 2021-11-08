import React from "react";
import { Link } from "react-router-dom";


class TeaTimeShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    componentDidMount() {
        this.props.fetchTeaTime(this.props.teaTime);
        // this.props.fetchUser(this.props.teaTime.host_id)
    }

    render() {
        if (!this.props.teaTime) {
            return null
        }
        const { teaTime } = this.props;
        console.log(this.props);
        return (
            <div>
                <h2>This is the teatime show page for</h2>
                <Link to={`/teaTimes/${teaTime.id}/edit`}>This is the edit button</Link>
            </div>
        )
    }
}

export default TeaTimeShow;