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

user2 = User.create(
  username: "cjames",
  first_name: "John",
  last_name: "Smith",
  phone: "07777777777",
  email: "johnsmith@something.com",
  password: "password",
  password_confirmation: "password")

user3 = User.create(
  username: "saltyolive",
  first_name: "Olive",
  last_name: "Snook",
  phone: "07777777777",
  email: "olivesnook@something.com",
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

post4 = Post.create(
  title: "Handsome chap with dark hair",     
  description: "7.45ish, Northern Line Northbound platform. To the handsome chap with a capacity for prolongued eye contact. We were face to face til the doors opened, you got off as I got on. You kept looking as you walked into the distance down the stairs. I was wearing round gold glasses, black t-shirt, carrying a tweed jacket and a small brown suitcase. If I’d not had a flight to catch, I’d have stopped and talked!",
  date: "2016-06-23",
  time: "07:45",
  user_id: 2)

post5 = Post.create(
  title: "Ginger guy on the Nothern line to Oxford Circus",     
  description: "Hi, tall, ginger guy sitting on the northbound Northern line. You were wearing shorts and a greenish long sleeved blouse. I got on at Camden Town, stood next to you and accidentally step on your foot. we both got off at Oxford Circus around 9.30 am on Thursday, 07/07 but I immediately lost track of you. I promise I won’t step on your feet when we’ll go dancing! The brunette, long haired girl wearing glasses, a striped skirt and ballerina flat shoes.",
  date: "2016-07-07",
  time: "09:30",
  user_id: 3)

post6 = Post.create(
  title: "We met in the Central Line London Tube Underground",     
  description: "I met a boy with black, curly and short hair, blue eyes and tall in the Central Line Underground towards Newbury Park, in London on Friday night at about 22:30 on 10/6/2016. He was wearing dark blue T-shirt, jeans and metal watch. He also has a skull tattoo on his right arm (bicep). We smiled and looked at each other a few times. Then I got off the tube at Stratford and we waved Goodbye. I would like to see you again.",
  date: "2016-06-10",
  time: "22:30",
  user_id: 2)

#Central Line Stations
west_ruislip = Station.create(name: "West Ruislip")
ruislip_gardens = Station.create(name: "Ruislip Gardens")
south_ruislip = Station.create(name: "South Ruislip")
northolt = Station.create(name: "Northolt")
greenford = Station.create(name: "Greenford")
perivale = Station.create(name: "Perivale")
hanger_lane = Station.create(name: "Hanger Lane")
ealing_broadway = Station.create(name: "Ealing Broadway")
west_acton = Station.create(name: "West Acton")
north_acton = Station.create(name: "North Acton")
east_acton = Station.create(name: "East Acton")
white_city = Station.create(name: "White City")
shepherds_bush = Station.create(name: "Shepherd's Bush")
holland_park = Station.create(name: "Holland Park")
notting_hill_gate = Station.create(name: "Notting Hill Gate")
queensway = Station.create(name: "Queensway")
lancaster_gate = Station.create(name: "Lancaster Gate")
marble_arch = Station.create(name: "Marble Arch")
bond_street = Station.create(name: "Bond Street")
oxford_circus = Station.create(name: "Oxford Circus")
tottenham_court_road = Station.create(name: "Tottenham Court Road")
holborn = Station.create(name: "Holborn")
chancery_lane = Station.create(name: "Chancery Lane")
st_pauls = Station.create(name: "St. Paul's")
bank = Station.create(name: "Bank")
liverpool_street = Station.create(name: "Liverpool Street")
bethnal_green = Station.create(name: "Bethnal Green")
mile_end = Station.create(name: "Mile End")
stratford = Station.create(name: "Stratford")
leyton = Station.create(name: "Leyton")
leytonstone = Station.create(name: "Leytonstone")
wanstead = Station.create(name: "Wanstead")
redbridge = Station.create(name: "Redbridge")
gants_hill = Station.create(name: "Gants Hill")
newbury_park = Station.create(name: "Newbury Park")
barkingside = Station.create(name: "Barkingside")
fairlop = Station.create(name: "Fairlop")
hainault = Station.create(name: "Hainault")
grange_hill = Station.create(name: "Grange Hill")
chigwell = Station.create(name: "Chigwell")
roding_valley = Station.create(name: "Roding Valley")
snaresbrook = Station.create(name: "Snaresbrook")
south_woodford = Station.create(name: "South Woodford")
woodford = Station.create(name: "Woodford")
buckhurst_hill = Station.create(name: "Buckhurst Hill")
loughton = Station.create(name: "Loughton")
debden = Station.create(name: "Debden")
theydon_bois = Station.create(name: "Theydon Bois")
epping = Station.create(name: "Epping")

#Northern Line Stations
#Bank and Tottenham Court Road is part of northern and central line. Removed from below to prevent duplication
high_barnet = Station.create(name: "High Barnet")
totteridge_whetstone = Station.create(name: "Totteridge & Whetstone")
woodside_park = Station.create(name: "Woodside Park")
west_finchley = Station.create(name: "West Finchley")
mill_hill_east = Station.create(name: "Mill Hill East")
finchley_central = Station.create(name: "Finchley Central")
east_finchley = Station.create(name: "East Finchley")
highgate = Station.create(name: "Highgate")
archway = Station.create(name: "Archway")
tufnell_park = Station.create(name: "Tufnell Park")
kentish_town = Station.create(name: "Kentish Town")
edgware = Station.create(name: "Edgware")
burnt_oak = Station.create(name: "Burnt Oak")
colindale = Station.create(name: "Colindale")
hendon_central = Station.create(name: "Hendon Central")
brent_cross = Station.create(name: "Brent Cross")
golders_green = Station.create(name: "Golders Green")
hampstead = Station.create(name: "Hampstead")
belsize_park = Station.create(name: "Belsize Park")
chalk_farm = Station.create(name: "Chalk Farm")
camden_town = Station.create(name: "Camden Town")
mornington_crescent = Station.create(name: "Mornington Crescent")
euston = Station.create(name: "Euston")
warren_street = Station.create(name: "Warren Street")
goodge_street = Station.create(name: "Goodge Street")
leicester_square = Station.create(name: "Leicester Square")
charing_cross = Station.create(name: "Charing Cross")
embankment = Station.create(name: "Embankment")
waterloo = Station.create(name: "Waterloo")
kings_cross_st_pancras = Station.create(name: "King's Cross St. Pancras")
angel = Station.create(name: "Angel")
old_street = Station.create(name: "Old Street")
moorgate = Station.create(name: "Moorgate")
london_bridge = Station.create(name: "London Bridge")
borough = Station.create(name: "Borough")
elephant_castle = Station.create(name: "Elephant & Castle")
kennington = Station.create(name: "Kennington")
oval = Station.create(name: "Oval")
stockwell = Station.create(name: "Stockwell")
clapham_north = Station.create(name: "Clapham North")
clapham_common = Station.create(name: "Clapham Common")
clapham_south = Station.create(name: "Clapham South")
balham = Station.create(name: "Balham")
tooting_bec = Station.create(name: "Tooting Bec")
tooting_broadway = Station.create(name: "Tooting Broadway")
colliers_wood = Station.create(name: "Colliers Wood")
south_wimbledon = Station.create(name: "South Wimbledon")
morden = Station.create(name: "Morden")

post1.stations = [bank]
post2.stations = [holborn]
post3.stations = [oxford_circus, liverpool_street]
post4.stations = [elephant_castle]
post5.stations = [camden_town, oxford_circus]
post6.stations = [oxford_circus]


central_line = Line.create(name: "Central Line")
northern_line = Line.create(name: "Northern Line")

central_line.stations = [
  west_ruislip,
  ruislip_gardens,
  south_ruislip,
  northolt,
  greenford,
  perivale,
  hanger_lane,
  ealing_broadway,
  west_acton,
  north_acton,
  east_acton,
  white_city,
  shepherds_bush,
  holland_park,
  notting_hill_gate,
  queensway,
  lancaster_gate,
  marble_arch,
  bond_street,
  oxford_circus,
  tottenham_court_road,
  holborn,
  chancery_lane,
  st_pauls,
  bank,
  liverpool_street,
  bethnal_green,
  mile_end,
  stratford,
  leyton,
  leytonstone,
  wanstead,
  redbridge,
  gants_hill,
  newbury_park,
  barkingside,
  fairlop,
  hainault,
  grange_hill,
  chigwell,
  roding_valley,
  snaresbrook,
  south_woodford,
  woodford,
  buckhurst_hill,
  loughton,
  debden,
  theydon_bois,
  epping
]
northern_line.stations = [
  high_barnet,
  totteridge_whetstone,
  woodside_park,
  west_finchley,
  mill_hill_east,
  finchley_central,
  east_finchley,
  highgate,
  archway,
  tufnell_park,
  kentish_town,
  edgware,
  burnt_oak,
  colindale,
  hendon_central,
  brent_cross,
  golders_green,
  hampstead,
  belsize_park,
  chalk_farm,
  camden_town,
  mornington_crescent,
  euston,
  warren_street,
  goodge_street,
  tottenham_court_road,
  leicester_square,
  charing_cross,
  embankment,
  waterloo,
  kings_cross_st_pancras,
  angel,
  old_street,
  moorgate,
  bank,
  london_bridge,
  borough,
  elephant_castle,
  kennington,
  oval,
  stockwell,
  clapham_north,
  clapham_common,
  clapham_south,
  balham,
  tooting_bec,
  tooting_broadway,
  colliers_wood,
  south_wimbledon,
  morden
]



