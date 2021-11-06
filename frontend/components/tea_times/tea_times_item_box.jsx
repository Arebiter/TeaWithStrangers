import React from "react";
import { Link } from "react-router-dom";


class TeaTimeItemBox extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        if (!this.props.teaTime) {
            return null;
        }

        return (
            <div className="tea-time-item-box">
                <h2>{this.props.teaTime.location}</h2>
            </div>
        )
    }
};

export default TeaTimeItemBox;