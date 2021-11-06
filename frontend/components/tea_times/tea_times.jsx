import React from "react";
import { Link } from "react-router-dom";
import TeaTimeItemBox from "./tea_times_item_box";


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
                <Link to={`/teaTimes#${city.city_name}`}>{city.city_name}</Link>
            </li>
        );

        const cityTeaTimes = cities.map((city, id) => (
            <li>
                <div className="city-name">
                    <h2>{city.city_name}</h2>
                    <button></button>
                </div>
                {city.tea_times.length > 0 ?
                    city.tea_times.map((teaTimeId) => (
                        <TeaTimeItemBox key={teaTimeId} teaTime={this.props.teaTimes[teaTimeId]} />
                    )) : (
                        null
                    )
                }
            </li>
        )
        )
        //iterate thorugh teatimes - get the ids - use that to key into teatimes
        //have a null for the if no teatimes 
        //watch out for empty objects - being true
        console.log(this.props);
        return (
            <div>
                <h1>These are the available cities</h1>
                <ul>
                    {allCities}
                    {cityTeaTimes}
                </ul>
            </div>
        )
    }
};

export default TeaTimes;