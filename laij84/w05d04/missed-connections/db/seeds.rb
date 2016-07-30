# Load models
require_relative '../models/post.rb'
require_relative '../models/station.rb'
require_relative '../models/user.rb'


["users", "posts", "stations"].each do |table_name|
  ActiveRecord::Base.connection.execute("TRUNCATE #{table_name} RESTART IDENTITY")
end

user1 = User.create(
  username: "kittykat",
  first_name: "Kitty",
  last_name: "Pimms",
  phone: "07777777777",
  email: "kittypimms@something.com",
  password: "password",
  password_confirmation: "password"
  )

post1 = Post.create
  (
  title: "Greek guy who helped me out of bank tube"     
  description: "I am Liz - the girl who looked very lost at Bank tube on my way to a first date. I was wearing a blue shirt dress and cream heels. I was just back from living in Nigeria. You were on your way out in Bank then Shoreditch wearing office attire. You walked me out and I really wanted to ask for your number but my date was there - awkward!!!! Hope you’re out there and single!!!"
  date: "2016-07-16"
  time: "19:15"
  user_id: 1
  )

station1 = Station.create(name: "Bank")
station2 = Station.create(name: "Liverpool Street")
station3 = Station.create(name: "Holborn")
station4 = Station.create(name: "Tottenham Court Road")
station5 = Station.create(name: "Oxford Circus")

station1.posts = [post1]
