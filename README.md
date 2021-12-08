![main_logo](https://github.com/Arebiter/TeaWithStrangers/blob/main/app/assets/images/main_logo_out.png?raw=true)
---

[Live Demo](https://teawithstrangers-pd.herokuapp.com/#/)

TeaWithStrangers is a meetup platform for getting together and conversing with other tea enthusiasts about anything. The app helps people, who would never meet in their normal lives, to connect and have conversations. A host can set up a Tea Time and up to six others can join them. 

# Technologies Used

* Ruby on Rails
* React
* Redux
* JavaScript
* HTML
* SCSS
* PostgreSQL
* Node.js
* jQuery
* jbuilder

# Features

## Making/Editing Tea Times 
![TeaTimeEdit](https://user-images.githubusercontent.com/48140022/141437193-5c0c0864-eb51-412a-afd0-d9910d3b87b4.PNG)

Signed in users are able to create tea time events and also edit those events. The changes to the tea times update in real time. There are validations in place to ensure a tea time is created for a date in the future.   

---
## Displaying Tea Times
![TeaTimesIndex](https://user-images.githubusercontent.com/48140022/145286740-e7a493af-39e1-48b9-b8b1-5504aa7bfaf9.png)

This page shows all availables TeaTimes organized by city. It allows users to see some basic information about the host and the location of the Tea Time. They may also click on each Tea Time item to learn more and join the event.

```javascript
const cityTeaTimes = cities.map((city, id) => (
            <li className="city-li" key={id}>
                <div className="city-name">
                    <h2 id={city.city_name}>{city.city_name}</h2>
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
```
In order to ensure all of the required data was being shown to the user, I had to iterate through all available cities to find the Tea Times occuring in them, then fetch information about each host. The Date objects for the Tea Times are also parsed to ensure only Tea Times that have not yet passed are displayed on the page. The `TeaTimeItemBox` is a component that simply displays the Tea Time's and its host's information. It also parses the Date/Time information of the Tea Time and formats is to fit within the component. 

The original site allowed any extra Tea Times to simply overflow onto the next line if there were enough to fill the width of the page. I removed this and enabled a scrollbar on the X axis - keeping all Tea Times for any one city within a single row. This makes the page less cluttered and allows for a better user experience.


---
## Reviews Of Hosts
![Reviews](https://user-images.githubusercontent.com/48140022/145286189-ab2479d5-4550-4490-b094-ca7bc34e0a62.png)

Users are able to reviews the hosts of Tea Times they are attending or have attended. The ReviewForm component creates a list of hosts for the user to choose from. The user is able to give a rating and write a review and also see previous reviews other users have left, along with the user's average rating. 

```javascript
const mSTP = (state) => {
    const attendingTeaTimes = Object.values(state.entities.teaTimes).filter(teaTime => ((Object.values(state.entities.attendances)
        .filter(attendance => ((attendance.user_id === state.session.id))) //get attandances for current user
        .map(attend => attend.teatime_id)) //get array of teatimeids from user's attendances
        .includes(teaTime.id))); //get teatimes user has attended or will be attanding
    const currentUserAttendingHostsIdArray = attendingTeaTimes.map(host => host.host_id); //make array of ids of hosts from teatimes current user is attending or has attended
    const distinctCurrentUserAttendingHostsIdArray = [...new Set(currentUserAttendingHostsIdArray)];
    const currentUser = state.entities.users[state.session.id];
    const currentUserReviewedHosts = currentUser.reviews_of_hosts;//array of ids of hosts the current user has reviewed
    const availableHosts = distinctCurrentUserAttendingHostsIdArray.filter(host_id => !currentUserReviewedHosts.includes(host_id))
        .concat(currentUserReviewedHosts.filter(host_id => !distinctCurrentUserAttendingHostsIdArray.includes(host_id))); //get array of hosts user had not reviewed yet - from list of hosts of teatimes current user is attending
    return {
        currentUser: currentUser,
        attendingTeaTimes: attendingTeaTimes, //get teatimes user has attended or will be attanding
        allUsers: Object.values(state.entities.users),
        allHosts: Object.values(state.entities.users).filter(host => currentUserAttendingHostsIdArray.includes(host.id)),
        availableHosts: Object.values(state.entities.users).filter(host => availableHosts.includes(host.id)), //get the hosts of teatimes the user is attending but has not reviewed 
        userReviews: Object.values(state.entities.reviews).filter(review => review.user_id === state.session.id), //find all reviews by the current user
        userReviewedHosts: Object.values(state.entities.users).filter(host => currentUserReviewedHosts.includes(host.id)), //hosts current user has reviewed
        userReviewsByOthers: Object.values(state.entities.reviews).filter(review => review.host_id === state.session.id), //find all reviews of current user by others
    }
}
```
I performed a large amount of filtering for the data passed into the `ReviewIndexContainer` props. This allowed me to keep the structure of the `ReviewIndex` component clean, letting me write clear code and easily pass the information onto the `Review` and `ReviewForm` components. The filtering looks through various sliced of state and brings together the necessary information from the User, the host, and the reviews. 


