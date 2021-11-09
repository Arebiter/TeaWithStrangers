import React from "react";


class ProfileTea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPrev: false
        }
        this.updateShowPrev = this.updateShowPrev.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id);
        this.props.fetchTeaTimes();
    }

    updateShowPrev() {
        if (this.state.showPrev === false) {
            this.setState({ showPrev: true })
        } else {
            this.setState({ showPrev: false })
        }
    };

    render() {
        if (this.props.tea_times.length === 0) {
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
        const { tea_times, currentUser, pageType } = this.props;

        //get the teas hosted by the logged in user
        const hostedTeas = tea_times.filter(tea_time => (currentUser.id === tea_time.host_id));
        //filter hosted teas to upcoming teas and previously hosted teas
        const hostedBefore = hostedTeas.filter(oldTea => (
            Date.parse(oldTea.date) < Date.parse(today)
        ));

        const hostedUpcoming = hostedTeas.filter(newTea => (
            Date.parse(newTea.date) > Date.parse(today)
        ));

        //get the teas the logges in user is attending
        //filter teas based on upcoming and previously joined teas
        const joinedTeas = tea_times.filter(tea_time => (tea_time.attendees.includes(currentUser.id)));
        //filter hosted teas to upcoming teas and previously hosted teas
        const joinedBefore = joinedTeas.filter(oldTea => (
            Date.parse(oldTea.date) < Date.parse(today)
        ));

        const joinedUpcoming = joinedTeas.filter(newTea => (
            Date.parse(newTea.date) > Date.parse(today)
        ));

        //have a link to edit upcoming hosted teas
        //have a button to leave upcoming joined teas - or have a link to the teashow, then to leave

        const pageContent = pageType === "Joined" ? (
            this.state.showPrev === false ? (
                <div>
                    {
                        joinedUpcoming.map(tea => (
                            <p>{tea.location}</p>
                        ))
                    }
                </div>
            ) : (
                <div>
                    {
                        joinedBefore.map(tea => (
                            <p>{tea.location}</p>
                        ))
                    }
                </div>
            )
        ) : (
            this.state.showPrev === false ? (
                <div>
                    {
                        hostedUpcoming.map(tea => (
                            <p>{tea.location}</p>
                        ))
                    }
                </div>
            ) : (
                <div>
                    {
                        hostedBefore.map(tea => (
                            <p>{tea.location}</p>
                        ))
                    }
                </div>
            )
        );

        const switchBtn = this.state.showPrev === false ? (
            <button onClick={this.updateShowPrev}>Show Previous Tea Times</button>
        ) : (
            <button onClick={this.updateShowPrev}>Show Upcoming Tea Times</button>
        );


        console.log(this.props)
        return (
            <div>
                <h1>Hello there</h1>
                {pageContent}
                {switchBtn}
            </div>
        )
    }
}

export default ProfileTea;