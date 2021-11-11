import React from "react";
import { Link } from "react-router-dom";
import TeaTimeItemBox from "./tea_time_item_box";


class TeaTimes extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchCities();
        this.props.fetchUsers();
        this.props.fetchTeaTimes();
    }

    componentDidUpdate(prevProps) {
        // debugger
        if (Object.values(this.props.teaTimes).length !== Object.values(prevProps.teaTimes).length) {
            this.props.fetchTeaTimes();
        }
    };

    render() {
        // debugger
        const { cities, teaTimes, users } = this.props;
        if (cities.length === 0) {
            return null;
        }
        if (!this.props.teaTimes || Object.values(teaTimes).length < 2) {
            return null;
        }

        const allCities = cities.map((city, id) =>
            <li key={id}>
                <Link to={`/teaTimes#${city.city_name}`}>{city.city_name}</Link>
            </li>
        );
        if (Object.values(teaTimes).length === 0) {
            return (
                <div className="teatime-container">
                    <section className="teatime-header-img">
                        <div className="teatime-main-img-container container">
                            <h1 className="teatime-main-line">Good Conversations</h1>
                            <span className="teatime-main-subtitle">They're hard to find</span>
                        </div>
                    </section>
                    <section className="teatime-description-container container">
                        <div className="teatime-description-main">
                            Tea With Strangers is tea, with strangers.
                        </div>
                        <div className="teatime-description-body">
                            For two hours, five-ish strangers sit at a cafe (or some other public place) with a host to talk.
                            Not about anything in particular.
                            The circumstances are unusual, but that's the point.
                        </div>
                        <div className="teatime-description-body">
                            There are no Tea Times available for now, feel free to
                            <span className="teatime-description-link"><Link to="/teaTimes/new"> host your own</Link></span>!
                        </div>
                    </section>
                    <div className="teatimes-section container">
                        <div className="teatimes-section-head">
                            <h1>Jump to your city's tea times</h1>
                            <div className="city-links-section">
                                <ul className="city-links">
                                    {allCities}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div >
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
            <li className="city-li" key={id}>
                <div className="city-name">
                    <h2>{city.city_name}</h2>
                    <Link className="teatime-host-link" to="/teaTimes/new">Host Tea Time</Link>
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
            <div className="teatime-container">
                <section className="teatime-header-img">
                    <div className="teatime-main-img-container container">
                        <h1 className="teatime-main-line">Good Conversations</h1>
                        <span className="teatime-main-subtitle">They're hard to find</span>
                    </div>
                </section>
                <section className="teatime-description-container container">
                    <div className="teatime-description-main">
                        Tea With Strangers is tea, with strangers.
                    </div>
                    <div className="teatime-description-body">
                        For two hours, five-ish strangers sit at a cafe (or some other public place) with a host to talk.
                        Not about anything in particular.
                        The circumstances are unusual, but that's the point.
                    </div>
                    <div className="teatime-description-body">
                        If none of these work for you, you can
                        <span className="teatime-description-link"><Link to="/teaTimes/new"> host your own</Link></span>!
                    </div>
                </section>
                <section className="teatimes-section container">
                    <div className="teatimes-section-head">
                        <h1>Jump to your city's tea times</h1>
                        <div className="city-links-section">
                            <ul className="city-links">
                                {allCities}
                            </ul>
                        </div>
                    </div>
                    <div className="teatimes-section-body">
                        <ul className="city-sections">
                            {cityTeaTimes}
                        </ul>
                    </div>
                </section>

            </div>
        )
    }
};

export default TeaTimes;