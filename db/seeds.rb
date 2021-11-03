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

City.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('cities')
new_york = City.create!(
    city_name: "New York City"
)

TeaTime.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('tea_times')
tea_time_1 = TeaTime.create!(
    location: "somewhere in Staten Island",
    start_time: "2021-11-25T12:00:00",
    end_time: "2021-11-25T15:00:00",
    city_id: new_york.id,
    host_id: 1,
    description: "lets do stuff"
)
