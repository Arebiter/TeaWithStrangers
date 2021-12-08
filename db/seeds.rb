# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#users 
User.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
demo = User.create!(
    email: "demoUser@demo.com",
    fname: "Guest",
    lname: "User",
    bio: "This is a demo user, it doesn't really do much",
    password: "demoPassword"
)
demo.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/albert-dera-ILip77SbmOE-unsplash.jpg"), filename:"albert-dera-ILip77SbmOE-unsplash.jpg")

pasan = User.create!(
    email: "pasan@gmail.com",
    fname: "Pasan",
    lname: "Dharmasena",
    bio: "Hi, I made this site, hopefully it's working right",
    password: "PasanPassword"
)
pasan.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/headshot_2.png"), filename:"headshot_2.png")

rebecca = User.create!(
    email: "reb@gmail.com",
    fname: "Rebecca",
    lname: "Foster",
    bio: "My name is actually gurubecca",
    password: "RebPassword"
)
rebecca.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/michael-dam-mEZ3PoFGs_k-unsplash.jpg"), filename:"michael-dam-mEZ3PoFGs_k-unsplash.jpg")

jon = User.create!(
    email: "jon@gmail.com",
    fname: "Jon",
    lname: "Berzon",
    bio: "I'm a CSS god",
    password: "JonPassword"
)
jon.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/austin-wade-X6Uj51n5CE8-unsplash.jpg"), filename:"austin-wade-X6Uj51n5CE8-unsplash.jpg")

vic = User.create!(
    email: "vic@gmail.com",
    fname: "Vic",
    lname: "He",
    bio: "Hello all! My name is Victor and I am an NYC native. I graduated from SUNY at Buffalo with a degree in Biomedical Sciences in 2019 and then worked as an EMT/Firefighter for several years. I am currently in the process of switching careers into tech. My interests include powerlifting, cooking, and design. On the weekends you can find me lounging at a park, hanging with friends, or trying to learn something new.",
    password: "VicPassword"
)
vic.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/good_boy.jpg"), filename:"good_boy.jpg")

alKim = User.create!(
    email: "al@gmail.com",
    fname: "Al",
    lname: "Kim",
    bio: "I like bagels, let's hang out and find the best bagel spots in the city - with some tea of course",
    password: "AlPassword"
)
alKim.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/jack-finnigan-rriAI0nhcbc-unsplash.jpg"), filename:"jack-finnigan-rriAI0nhcbc-unsplash.jpg")

emmay = User.create!(
    email: "Emmay@gmail.com",
    fname: "Emmay",
    lname: "Alam",
    bio: "I'll write an bio in later. For now, what's up?",
    password: "EmmayPassword"
)
emmay.profile_photo.attach(io: open("https://teawithstrangers-seed.s3.amazonaws.com/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg"), filename:"joseph-gonzalez-iFgRcqHznqg-unsplash.jpg")

City.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('cities')
new_york = City.create!(
    city_name: "New York City"
)
san_francisco = City.create!(
    city_name: "San Francisco"
)
new_haven = City.create!(
    city_name: "New Haven"
)

boston = City.create!(
    city_name: "Boston"
)

houston = City.create!(
    city_name: "Houston"
)

chicago = City.create!(
    city_name: "Chicago"
)

seattle = City.create!(
    city_name: "Seattle"
)

los_angeles = City.create!(
    city_name: "Los Angeles"
)

new_orleans = City.create!(
    city_name: "New Orleans"
)

denver = City.create!(
    city_name: "Denver"
)


TeaTime.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('tea_times')
tea_time_1 = TeaTime.create!(
    location: "Roosevelt Island",
    date: "2022-11-25",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_york.id,
    host_id: demo.id,
    description: "There's so much cool things to see and do here. I'm sure we can find a place to get tea, chill, and talk about Marvel movies"
)

tea_time_2 = TeaTime.create!(
    location: "Union Square, near the giant clock thing",
    date: "2022-11-27",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_york.id,
    host_id: pasan.id,
    description: "Let's finally hang out in person, maybe visit the App Academy campus and see what we missed out on"
)

tea_time_3 = TeaTime.create!(
    location: "Bar Pizza",
    date: "2022-11-28",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_haven.id,
    host_id: rebecca.id,
    description: "Let's get some mashed potato pizza"
)

tea_time_4 = TeaTime.create!(
    location: "The Staten Island mall",
    date: "2022-11-01",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_york.id,
    host_id: demo.id,
    description: "I'm sure there's a tea place in the mall, if not, we can just get coffee and talk about our lives"
)

tea_time_5 = TeaTime.create!(
    location: "Starbucks somewhere in Queens",
    date: "2022-11-25",
    start_time: "12:00",
    end_time: "14:00",
    city_id: new_york.id,
    host_id: jon.id,
    description: "Let's talk about how to do a MERN stack project"
)

tea_time_6 = TeaTime.create!(
    location: "Koreatown",
    date: "2022-5-22",
    start_time: "00:00",
    end_time: "12:00",
    city_id: los_angeles.id,
    host_id: vic.id,
    description: "Is water wet? And other philosophical questions"
)

tea_time_7 = TeaTime.create!(
    location: "East Village",
    date: "2022-12-01",
    start_time: "11:00",
    end_time: "12:00",
    city_id: new_york.id,
    host_id: alKim.id,
    description: "Lets find some good bagels"
)

tea_time_8 = TeaTime.create!(
    location: "In front of the Bean",
    date: "2022-11-24",
    start_time: "12:00",
    end_time: "14:00",
    city_id: chicago.id,
    host_id: emmay.id,
    description: "Let's talk about how bad of a person Anish Kapoor is"
)

tea_time_9 = TeaTime.create!(
    location: "Near the Staten Island Ferry",
    date: "2022-10-28",
    start_time: "11:00",
    end_time: "13:30",
    city_id: new_york.id,
    host_id: demo.id,
    description: "Let's grab some tea and talk about how bad people in Staten Island are at driving"
)

tea_time_10 = TeaTime.create!(
    location: "TBD, I'll let you know",
    date: "2022-10-19",
    start_time: "13:00",
    end_time: "15:00",
    city_id: houston.id,
    host_id: demo.id,
    description: "Let's go do something in Houston, I haven't seen the city yet"
)

tea_time_11 = TeaTime.create!(
    location: "Near the Museum of Modern Art",
    date: "2022-05-19",
    start_time: "13:00",
    end_time: "15:00",
    city_id: san_francisco.id,
    host_id: rebecca.id,
    description: "I LOVE modern art, let's talk about it"
)

tea_time_12 = TeaTime.create!(
    location: "The Space Needle",
    date: "2022-03-19",
    start_time: "13:00",
    end_time: "15:00",
    city_id: seattle.id,
    host_id: demo.id,
    description: "Let's go to the top of the needle and just hang out"
)

tea_time_13 = TeaTime.create!(
    location: "Jackson Square",
    date: "2022-03-19",
    start_time: "13:00",
    end_time: "15:00",
    city_id: new_orleans.id,
    host_id: vic.id,
    description: "I hope we can drink tea and maybe even paint a little"
)

tea_time_14 = TeaTime.create!(
    location: "Denver Botanic Gardens",
    date: "2022-03-19",
    start_time: "13:00",
    end_time: "15:00",
    city_id: denver.id,
    host_id: emmay.id,
    description: "I haven't been here before, I'm dying to check it out"
)

tea_time_15 = TeaTime.create!(
    location: "The Aquarium",
    date: "2022-03-13",
    start_time: "13:00",
    end_time: "15:00",
    city_id: boston.id,
    host_id: alKim.id,
    description: "I haven't been here before, I'm dying to check it out"
)

tea_time_15 = TeaTime.create!(
    location: "Maybe Alcatraz?",
    date: "2022-01-19",
    start_time: "13:00",
    end_time: "15:00",
    city_id: san_francisco.id,
    host_id: pasan.id,
    description: "I just want to check it out, going with others seems fun"
)

tea_time_16 = TeaTime.create!(
    location: "TBD",
    date: "2022-02-02",
    start_time: "13:00",
    end_time: "15:00",
    city_id: houston.id,
    host_id: jon.id,
    description: "I'm new to the city, just looking to make some friends and get to know people"
)

Attendance.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('attendances')

attendance1 = Attendance.create!(
    teatime_id: 1,
    user_id: 2
)

attendance2 = Attendance.create!(
    teatime_id: 1,
    user_id: 3
)

attendance3 = Attendance.create!(
    teatime_id: 1,
    user_id: 4
)

attendance4 = Attendance.create!(
    teatime_id: 1,
    user_id: 5
)

attendance5 = Attendance.create!(
    teatime_id: 1,
    user_id: 6
)
attendance6 = Attendance.create!(
    teatime_id: 1,
    user_id: 7
)
attendance7 = Attendance.create!(
    teatime_id: 2,
    user_id: 3
)
attendance8 = Attendance.create!(
    teatime_id: 2,
    user_id: 4
)
attendance9 = Attendance.create!(
    teatime_id: 2,
    user_id: 5
)
attendance10 = Attendance.create!(
    teatime_id: 3,
    user_id: 2
)
attendance11 = Attendance.create!(
    teatime_id: 3,
    user_id: 1
)
attendance12 = Attendance.create!(
    teatime_id: 4,
    user_id: 2
)
attendance13 = Attendance.create!(
    teatime_id: 4,
    user_id: 6
)
attendance14 = Attendance.create!(
    teatime_id: 4,
    user_id: 7
)
attendance15 = Attendance.create!(
    teatime_id: 5,
    user_id: 5
)
attendance16 = Attendance.create!(
    teatime_id: 5,
    user_id: 7
)
attendance17 = Attendance.create!(
    teatime_id: 6,
    user_id: 3
)
attendance18 = Attendance.create!(
    teatime_id: 6,
    user_id: 2
)
attendance19 = Attendance.create!(
    teatime_id: 6,
    user_id: 6
)
attendance20 = Attendance.create!(
    teatime_id: 7,
    user_id: 7
)
attendance21 = Attendance.create!(
    teatime_id: 8,
    user_id: 2
)
attendance22 = Attendance.create!(
    teatime_id: 8,
    user_id: 3
)

Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('reviews')

review1 = Review.create!(
    user_id: pasan.id,
    host_id: rebecca.id,
    rating: 5,
    review: "Rebecca was a great host. We talked a lot about movies and tv shows we liked and I was able to meet some other really cool people. I hope she hosts again soon."
)

review2 = Review.create!(
    user_id: pasan.id,
    host_id: demo.id,
    rating: 3,
    review: "Guest was alright. He didn't really do much, almost like he's not a real person. But everyon one else that showed up was great."
)

review3 = Review.create!{
    user_id: rebecca.id,
    host_id: demo.id,
    rating: 2,
    review: "It was ok, I think Guest was a little robotic and I did actually get to have some tea."
}

review4 = Review.create!{
    user_id: vic.id,
    host_id: demo.id,
    rating: 5,
    review: "Guest was an awesome host!"
}

review5 = Review.create!{
    user_id: rebecca.id,
    host_id: pasan.id,
    rating: 4,
    review: "I had a lot of fun! Pasan was a great host and I think everyone had a good time. It was great finally meeting everyone."
}

review6 = Review.create!{
    user_id: jon.id,
    host_id: pasan.id,
    rating: 5,
    review: "Pasan's tea time was a lot of fun. Great to finally meet people in person"
}

review7 = Review.create!{
    user_id: demo.id,
    host_id: rebecca.id,
    rating: 5,
    review: "It was fun."
}

review8 = Review.create!{
    user_id: vic.id,
    host_id: jon.id,
    rating: 5,
    review: "That was awesome, we gotta do it again."
}

review9 = Review.create!{
    user_id: emmay.id,
    host_id: jon.id,
    rating: 4,
    review: "Jon was awesome! I just had trouble finding the place."
}

review10 = Review.create!{
    user_id: rebecca.id,
    host_id: vic.id,
    rating: 4,
    review: "I came all the way out to LA for this, it was great!"
}

review11 = Review.create!{
    user_id: pasan.id,
    host_id: vic.id,
    rating: 5, 
    review: "It was my first time in LA and Vic made sure we all had a great time!"
}

review12 = Review.create!{
    user_id: emmay.id,
    host_id: alKim.id,
    rating: 5,
    review: "Al was awesome and getting food in the East Village is always a good time."
}

review13 = Review.create!{
    user_id: pasan.id,
    host_id: emmay.id,
    rating: 5,
    review: "10/10 host but I kind of hate the Bean."
}
