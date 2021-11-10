import React from "react";
import { Link } from "react-router-dom";
import TeaTimeItemBox from "./tea_time_item_box";


class TeaTimes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTeaTimes();
        this.props.fetchCities();
        this.props.fetchUsers();
    }

    render() {
        const { cities, teaTimes, users } = this.props;
        if (cities.length === 0) {
            return null;
        }
        if (!this.props.teaTimes) {
            return null;
        }


        const allCities = cities.map((city, id) =>
            <li key={id}>
                <Link to={`/teaTimes#${city.city_name}`}>{city.city_name}</Link>
            </li>
        );
        if (Object.values(teaTimes).length === 0) {
            return (
                <div className="teatimes-section container">
                    <div className="city-links-section">
                        <h1>These are the available cities</h1>
                        <ul className="city-links">
                            {allCities}
                        </ul>
                    </div>
                </div>
            )
        };

        const hostIds = Object.values(this.props.teaTimes).map(teaTime => (teaTime.host_id));

        if (!(hostIds.every(hostId => users[hostId]))) {
            return null;
        }

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //add 1 to index to get current month
        let yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        };
        if (mm < 10) {
            mm = '0' + mm
        };
        today = yyyy + '-' + mm + '-' + dd;



        const cityTeaTimes = cities.map((city, id) => (
            <li key={id}>
                <div className="city-name">
                    <h2>{city.city_name}</h2>
                    <Link to="/teaTimes/new">Host a Tea Times</Link>
                </div>
                <div className="city-tea-times">
                    {
                        city.tea_times.length > 0 ?
                            city.tea_times.map((teaTimeId) => (
                                (Date.parse(teaTimes[teaTimeId].date) > Date.parse(today) ? (
                                    <TeaTimeItemBox key={teaTimeId} teaTime={teaTimes[teaTimeId]} host={users[teaTimes[teaTimeId].host_id]} />
                                ) : (
                                    null
                                )))
                            ) : (
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