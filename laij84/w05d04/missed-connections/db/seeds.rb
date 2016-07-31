# Load models
require_relative '../models/post.rb'
require_relative '../models/station.rb'
require_relative '../models/user.rb'
require_relative '../models/line.rb'


["posts", "stations", "users"].each do |table_name|
  ActiveRecord::Base.connection.execute("TRUNCATE #{table_name} RESTART IDENTITY")
end

user1 = User.create(
  username: "kittykat",
  first_name: "Kitty",
  last_name: "Pimms",
  phone: "07777777777",
  email: "kittypimms@something.com",
  password: "password",
  password_confirmation: "password")

post1 = Post.create(
  title: "Greek guy who helped me out of bank tube",     
  description: "I am Kitty - the girl who looked very lost at Bank tube on my way to a first date. I was wearing a blue shirt dress and cream heels. I was just back from living in Nigeria. You were on your way out in Bank then Shoreditch wearing office attire. You walked me out and I really wanted to ask for your number but my date was there - awkward!!!! Hope you’re out there and single!!!",
  date: "2016-07-16",
  time: "19:15",
  user_id: 1)

post2 = Post.create(
  title: "Central Line Holborn Saturday",     
  description: "We were on a central line train around 4:30pm on Saturday July 23rd. You (tall, good looking, wearing a hat and headphones) moved from where you were standing next to me by the door just before the Holborn stop where you got off. In the odd chance you see this and want to meet up, let's grab a drink.",
  date: "2016-07-23",
  time: "16:30",
  user_id: 1)

post3 = Post.create(
  title: "Violin guy on train",     
  description: "We exchanged glances at Liverpool Street station before getting on the 10.42pm train on Sunday to Oxford Circus. You then say down in the seats adjacent. Was going to strike up a conversation when we sat down but then the lady nearby asked you about your instrument. Doh. I was wearing blue trousers and a cardigan and listening to radio through my phone. I felt a connection with you - would love to meet properly for a drink or coffee!",
  date: "2016-07-31",
  time: "10:42",
  user_id: 1)

#Central Line Stations
station1 = Station.create(name: "West Ruislip")
station2 = Station.create(name: "Ruislip Gardens")
station3 = Station.create(name: "South Ruislip")
station4 = Station.create(name: "Northolt")
station5 = Station.create(name: "Greenford")
station6 = Station.create(name: "Perivale")
station7 = Station.create(name: "Hanger Lane")
station8 = Station.create(name: "Ealing Broadway")
station9 = Station.create(name: "West Acton")
station10 = Station.create(name: "North Acton")
station11 = Station.create(name: "East Acton")
station12 = Station.create(name: "White City")
station13 = Station.create(name: "Shepherd's Bush")
station14 = Station.create(name: "Holland Park")
station15 = Station.create(name: "Notting Hill Gate")
station16 = Station.create(name: "Queensway")
station17 = Station.create(name: "Lancaster Gate")
station18 = Station.create(name: "Marble Arch")
station19 = Station.create(name: "Bond Street")
station20 = Station.create(name: "Oxford Circus")
station21 = Station.create(name: "Tottenham Court Road")
station22 = Station.create(name: "Holborn")
station23 = Station.create(name: "Chancery Lane")
station24 = Station.create(name: "St. Paul's")
station25 = Station.create(name: "Bank")
station26 = Station.create(name: "Liverpool Street")
station27 = Station.create(name: "Bethnal Green")
station28 = Station.create(name: "Mile End")
station29 = Station.create(name: "Stratford")
station30 = Station.create(name: "Leyton")
station31 = Station.create(name: "Leytonstone")
station32 = Station.create(name: "Wanstead")
station33 = Station.create(name: "Redbridge")
station34 = Station.create(name: "Gants Hill")
station35 = Station.create(name: "Newbury Park")
station36 = Station.create(name: "Barkingside")
station37 = Station.create(name: "Fairlop")
station38 = Station.create(name: "Hainault")
station39 = Station.create(name: "Grange Hill")
station40 = Station.create(name: "Chigwell")
station41 = Station.create(name: "Roding Valley")
station42 = Station.create(name: "Snaresbrook")
station43 = Station.create(name: "South Woodford")
station44 = Station.create(name: "Woodford")
station45 = Station.create(name: "Buckhurst Hill")
station46 = Station.create(name: "Loughton")
station47 = Station.create(name: "Debden")
station48 = Station.create(name: "Theydon Bois")
station49 = Station.create(name: "Epping")

post1.stations = [station1]
post2.stations = [station3]
post3.stations = [station2, station5]

line1 = Line.create(name: "Central Line")

line1.stations = [station1,station2,station3,station4,station5,station6,station7,station8,station9,station10,station11,station12,station13,station14,station15,station16,station17,station18,station19,station20,station21,station22,station23,station24,station25,station26,station27,station28,station29,station30,station31,station32,station33,station34,station35,station36,station37,station38,station39,station40,station41,station42,station43,station44,station45,station46,station47,station48,station49]



