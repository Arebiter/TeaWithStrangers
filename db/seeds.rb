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
demo.profile_photo.attach(io: File.open("/home/pasan/fullstack_project/images/albert-dera-ILip77SbmOE-unsplash.jpg"), filename:"albert-dera-ILip77SbmOE-unsplash.jpg")

user1 = User.create!(
    email: "pd@gmail.com",
    fname: "Pasan",
    lname: "Dharmasena",
    bio: "Hi, I made this site, hopefully it's working right",
    password: "PasanPassword"
)
user1.profile_photo.attach(io: File.open("/home/pasan/fullstack_project/images/headshot_2.png"), filename:"headshot_2.png")

user2 = User.create!(
    email: "reb@gmail.com",
    fname: "Rebecca",
    lname: "Foster",
    bio: "My name is actually gurubecca",
    password: "RebPassword"
)
user2.profile_photo.attach(io: File.open("/home/pasan/fullstack_project/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg"), filename:"michael-dam-mEZ3PoFGs_k-unsplash.jpg")

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

TeaTime.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('tea_times')
tea_time_1 = TeaTime.create!(
    location: "somewhere in Staten Island",
    date: "2021-11-25",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_york.id,
    host_id: demo.id,
    description: "lets do stuff"
)

tea_time_2 = TeaTime.create!(
    location: "somewhere in Staten Island",
    date: "2021-11-27",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_york.id,
    host_id: user1.id,
    description: "lets do stuff again, this time with Pasan"
)

tea_time_3 = TeaTime.create!(
    location: "Bar Pizza",
    date: "2021-11-28",
    start_time: "12:00",
    end_time: "15:00",
    city_id: new_haven.id,
    host_id: user2.id,
    description: "let's get some mashed potato pizza"
)

Attendance.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('attendances')

attendance1 = Attendance.create!(
    teatime_id: 2,
    user_id: 1
)

attendance2 = Attendance.create!(
    teatime_id: 2,
    user_id: 2
)

attendance3 = Attendance.create!(
    teatime_id: 2,
    user_id: 3
)

attendance4 = Attendance.create!(
    teatime_id: 1,
    user_id: 3
)
