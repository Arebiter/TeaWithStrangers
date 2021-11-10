import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="progress-bar">
                <h1>This is the progress bar</h1>
                {
                    this.props.attendees.map(attendee => (
                        <div>{attendee}</div>
                    ))
                }
            </div>
        )
    }
}

export default ProgressBar;