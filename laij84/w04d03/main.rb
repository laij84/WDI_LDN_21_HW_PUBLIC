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