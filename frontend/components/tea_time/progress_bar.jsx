import React from "react";

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        const line = (this.props.attendees.length < 6) ? (
            <h2>Spots available</h2>
        ) : (
            <h2>Tea Time Is Full</h2>
        )

        let remaining = 6 - this.props.attendees.length;

        const remainingArray = []
        while (remaining > 0) {
            remainingArray.push(remaining)
            remaining -= 1;
        }

        return (
            <div className="progress-bar">
                {line}
                <div className="bar">
                    {
                        this.props.attendees.map((attendee, id) => (
                            <div key={id} className="block"></div>
                        ))
                    }
                    {
                        remainingArray.map((spot, id) => (
                            <div key={id} className="block white"></div>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default ProgressBar;