import React from "react";
import { Link } from "react-router-dom";

class TeaTimes extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchTeaTimes();
        this.props.fetchCities();
    }

    render() {
        const { cities, teaTimes } = this.props

        const allCities = cities.map((city, id) =>
            <li key={id}>
                <h2>{city.city_name}</h2>
            </li>
        );

        console.log(this.props);
        return (
            <div>
                <h1>These are the available cities</h1>
                <ul>
                    {allCities}
                </ul>
            </div>
        )
    }
};

export default TeaTimes;