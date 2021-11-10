import React from "react";
import { Link } from "react-router-dom";
import TeaTimeItemBox from "./tea_time_item_box";


class TeaTimes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchUsers();
        this.props.fetchTeaTimes();
        this.props.fetchCities();
    }

    render() {

        // if (this.props.users) {
        //     return null
        // }
        const { cities, teaTimes, users } = this.props

        const allCities = cities.map((city, id) =>
            <li key={id}>
                <Link to={`/teaTimes#${city.city_name}`}>{city.city_name}</Link>
            </li>
        );

        const cityTeaTimes = cities.map((city, id) => (
            <li key={id}>
                <div className="city-name">
                    <h2>{city.city_name}</h2>
                    <Link to="/teaTimes/new">Host a Tea Times</Link>
                </div>
                <div className="city-tea-times">
                    {city.tea_times.length > 0 ?
                        city.tea_times.map((teaTimeId) => (
                            <TeaTimeItemBox key={teaTimeId} teaTime={teaTimes[teaTimeId]} users={users} />
                        )) : (
                            null
                        )
                    }
                </div>
            </li>
        )
        )
        //iterate thorugh teatimes - get the ids - use that to key into teatimes
        //have a null for the if no teatimes 
        //watch out for empty objects - being true
        console.log(this.props);
        return (
            <div className="teatimes-section container">
                <div className="city-links-section">
                    <h1>These are the available cities</h1>
                    <ul className="city-links">
                        {allCities}
                    </ul>
                </div>
                <ul className="city-sections">
                    {cityTeaTimes}
                </ul>
            </div>
        )
    }
};

export default TeaTimes;