cards = [1,2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King"]
suits = ["♠", "♣", "♥", "♦"] 

deck = cards.product(suits).shuffle

# p deck

#put 2 cards into player's hand and dealer's deck.
player_array = deck.pop(2)
dealer_array = deck.pop(2)

puts "Player's hand contains #{player_array[0][0]}#{player_array[0][1]} and the #{player_array[1][0]}#{player_array[1][1]}"

player_array.reduce do |prev, current|
  if prev[0] == "Jack" || prev[0] == "Queen" || prev[0] == "King"
     prev[0] = 10
  elsif current[0] == "Jack" || current[0] ==  "Queen" || current[0] ==  "King"
     current[0] = 10 
  end
  total = prev[0].to_i+current[0].to_i 
puts total
end