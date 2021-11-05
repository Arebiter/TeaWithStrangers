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
    profile_img_url: "image",
    password: "demoPassword"
)
demo.profile_photo.attach(io: File.open("/home/pasan/fullstack_project/images/albert-dera-ILip77SbmOE-unsplash.jpg"), filename:"albert-dera-ILip77SbmOE-unsplash.jpg")

user1 = User.create!(
    email: "pd@gmail.com",
    fname: "Pasan",
    lname: "Dharmasena",
    bio: "Hi, I made this site, hopefully it's working right",
    profile_img_url: "image",
    password: "PasanPassword"
)
user1.profile_photo.attach(io: File.open("/home/pasan/fullstack_project/images/headshot_2.png"), filename:"headshot_2.png")

user2 = User.create!(
    email: "reb@gmail.com",
    fname: "Rebecca",
    lname: "Foster",
    bio: "My name is actually gurubecca",
    profile_img_url: "image",
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
    start_time: "2021-11-25T12:00:00",
    end_time: "2021-11-25T15:00:00",
    city_id: new_york.id,
    host_id: demo.id,
    description: "lets do stuff"
)

tea_time_2 = TeaTime.create!(
    location: "somewhere in Staten Island",
    start_time: "2021-11-27T12:00:00",
    end_time: "2021-11-27T15:00:00",
    city_id: new_york.id,
    host_id: user1.id,
    description: "lets do stuff again, this time with Pasan"
)

tea_time_3 = TeaTime.create!(
    location: "Bar Pizza",
    start_time: "2021-11-28T12:00:00",
    end_time: "2021-11-28T15:00:00",
    city_id: new_haven.id,
    host_id: user2.id,
    description: "let's get some mashed potato pizza"
)
