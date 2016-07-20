require_relative "lib/animal"
require_relative "lib/client"
require_relative "lib/shelter"

@shelter = Shelter.new("Jason's Animal Home")

def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name} ***\n\n"
  puts "1: Add a client"
  puts "2: List all clients"
  puts "3: Register a client's animal"
  puts "4: List all animals"
  puts "Q: Quit\n\n"
  print "--> "
  gets.chomp
end

def list_clients
  @shelter.clients.each.with_index do |client,index|
    str = "#{index+1}.\t#{client}"
    puts str 
  end
end

response = menu

while response.upcase != "Q"
  case response
  when "1" #Add a flight
    puts "What is your name?"
    name = gets.chomp

    puts "what is your age"
    age = gets.chomp

    puts "What is your gender?"
    gender = gets.chomp

    puts "How many animals are checking in?"
    number_of_pets = gets.to_i

    puts @shelter.add_client(name, age, gender, number_of_pets)
    puts "\n\nPress any key to continue"
    gets
  when "2"
    list_clients
  puts "\n\nPress any key to continue"
  gets
  end
  response = menu
end