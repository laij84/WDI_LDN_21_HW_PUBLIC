require_relative "lib/animal"
require_relative "lib/client"
require_relative "lib/shelter"

@shelter = Shelter.new("Jason's Animal Home")

def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name} ***\n\n"
  puts "1: Add a client"
  puts "2: List all clients"
  puts "3: Register an animal"
  puts "4: List animals"
  puts "5: Adopt an animal"
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

def list_animals
  @shelter.animals.each.with_index do |animal,index|
    str = "#{index+1}.\t#{animal}"
    puts str 
  end
end

def list_adopt_animals
  @shelter.adopt_animals.each.with_index do |animal,index|
    str = "#{index+1}.\t#{animal}"
    puts str
  end
end

response = menu

while response.upcase != "Q"
  case response
  when "1"
    puts "What is your name?"
    name = gets.chomp

    puts "What is your age"
    age = gets.chomp

    puts "What is your gender?"
    gender = gets.chomp

    puts "How many pets do you have?"
    number_of_pets = gets.to_i

    puts @shelter.add_client(name, age, gender, number_of_pets)
    puts "\n\nPress any key to continue"
    gets
  when "2"
    list_clients
  puts "\n\nPress any key to continue"
  gets

  when "3"
    puts "What is the animal's name"
    name = gets.chomp
    
    puts "What breed is #{name}?"
    breed = gets.chomp
    
    puts "How old is #{name}?"
    age = gets.chomp

    puts "What gender is #{name}?"
    gender = gets.chomp

    puts "What is #{name}'s favourite toys?"   
    toys = gets.chomp

    puts "Do you want to put #{name} up for adoption? Enter (y) or (n)."   
    adopt = gets.downcase.chomp
 
    animal = @shelter.add_animal(name, breed, age, gender, toys, adopt)
    puts "#{name} added to the shelter"
    puts "\n\nPress any key to continue"
    gets

  when "4"
    puts "Animals Not for Adoption:"
    list_animals
    puts "\n\n"
    puts "Animals Available for Adoption:"
    list_adopt_animals
    puts "\n\nPress any key to continue"
    gets

  when "5"
    list_adopt_animals
    puts "Enter the number of the animal you want to adopt."
    adopt_animal_idx = gets.to_i-1
    @shelter.remove_adopt_animal(adopt_animal_idx)
    puts "Thank you for adopting!"
    puts "\n\nPress any key to continue"
    gets

  end
  response = menu
end