import React from "react";
import { Link } from "react-router-dom";


class TeaTimeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            date: "",
            start_time: "",
            end_time: "",
            description: "",
            city_id: "",
            host_id: this.props.currentUser.id,
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.props.fetchCities();
    }

    handleSubmit(e) {
        e.preventDefault();
        const tea_time = Object.assign({}, this.state);
        this.props.processAction(tea_time);
    };

    update(field) {
        return (e) => {
            if (field === "city_id") {
                this.setState({ [field]: parseInt(e.target.value) })
            } else {
                this.setState({ [field]: e.target.value })
            }
        }
    };

    render() {
        if (this.props.cities.length === 0) {
            return null;
        }

        //set the minimum value for calendar at today
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

        const { formType, cities } = this.props
        const { location, start_time, end_time, description } = this.state
        return (
            <section className="tea-time-form-section">
                <div className="tea-time-form-container container">

                    <form className="tea-time-form" onSubmit={this.handleSubmit}>
                        <div className="tea-time-form-header-div">
                            <h1>This is the form header</h1>
                        </div>
                        <div className="tea-time-form-top">
                            <h3>{formType}</h3>
                        </div>
                        <div className="tea-time-form-inputs">
                            <div className="tea-time-edit-info-tag">
                                <h3>Location</h3>
                                <input className="tea-time-form-field" type="text" onChange={this.update("location")} value={location} />
                            </div>
                            <div className="tea-time-edit-info-tag">
                                <h3>Select a Date</h3>
                                <div className="tea-time-edit-time-inputs">
                                    <div>Have tea on</div>
                                    <input type="date" name="tea_date" min={today} onChange={this.update("date")} />
                                    <div>from</div>
                                    <input type="time" onChange={this.update("start_time")} value={start_time} />
                                    <div>to</div>
                                    <input type="time" min={start_time} onChange={this.update("end_time")} value={end_time} />
                                </div>
                            </div>
                            <div className="tea-time-edit-info-tag">
                                <h3>Select A City</h3>
                                <div>
                                    <select className="city-select" onChange={this.update("city_id")}>
                                        {
                                            cities.map((city, id) => {
                                                return (
                                                    <option key={id} value={parseInt(city.id)}>{city.city_name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    {/* <h3>If your city is not available, feel free to enter your own</h3>
                                    <input className="tea-time-form-field" type="text" onChange={this.update("location")} value={location} /> */}
                                </div>
                            </div>
                            <div className="tea-time-edit-info-tag">
                                <h3>What do you want to talk about? </h3>
                                <textarea className="tea-time-form-field" type="text" onChange={this.update("description")} value={description} ></textarea>
                            </div>
                            <div className="tea-time-button-div">
                                <button className="tea-time-button">{formType}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
};

export default TeaTimeForm;