![main_logo](https://github.com/Arebiter/TeaWithStrangers/blob/main/app/assets/images/main_logo_out.png?raw=true)
---

[Live Demo](https://teawithstrangers-pd.herokuapp.com/#/)

TeaWithStrangers is a meetup platform for getting together and conversing with other tea enthusiasts about anything. The app helps people, who would never meet in their normal lives, to connect and have conversations. A host can set up a Tea Time and up to six others can join them. 

## Technologies Used

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

## Features

### Making/Editing Tea Times 
![TeaTimeEdit](https://user-images.githubusercontent.com/48140022/141437193-5c0c0864-eb51-412a-afd0-d9910d3b87b4.PNG)

Signed in users are able to create tea time events and also edit those events. The changes to the tea times update in real time. There are validations in place to ensure a tea time is created for a date in the future.   


### Joining/Displaying Tea Times
![TeaTimesIndex](https://user-images.githubusercontent.com/48140022/141437243-f095de5a-4cc8-479f-b50b-d7c486fc53a5.PNG)
`const cityTeaTimes = cities.map((city, id) => (
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
        )`


![TeaTimeShow](https://user-images.githubusercontent.com/48140022/141437259-d69b03d0-13e6-48ff-8c5c-d101780f710c.PNG)

The main tea times page display all available tea times, sorted by the city they are being hosted in. Each tea time is selectable. Clicking on enables a logged in user to view the tea time's information and join the tea time, or leave the tea time - if they have already joined. This automatically updates the tea times index page which reflects the number of users each tea time has attending through the use of a progress bar. 




## Future Features
### User Reviews
I want to give users the ability to review the tea times they have attended. The host of the tea time will receive those reviews on their profile and the reviews will be accessible by other people. 

### Google Maps
I want to give the users a way to more precisely determine the location of a tea time. Using the google maps api, users will be able to point to exactly where they want to meet instead of vague locations and instructions

