cards = [1,2,3,4,5,6,7,8,9,10, "Jack", "Queen", "King"]
suits = ["♠", "♣", "♥", "♦"] 
@player_score = 0
@dealer_score = 0
deck = cards.product(suits).shuffle

#put 2 cards into player's hand and dealer's deck.
player_array = deck.pop(2)
dealer_array = deck.pop(2)

puts "The player's hand contains #{player_array}"
puts "The dealer's hand contains #{dealer_array}"

def calculate_player_hand (player_array, player_score) 
  @player_score = 0

  player_array.each do |elem|

    if elem.include? "Jack"
    @player_score +=10
    elsif elem.include? "Queen"
    @player_score +=10
    elsif elem.include? "King"
    @player_score +=10
    else
    @player_score += elem[0] 
    end
  end
end

def calculate_dealer_hand (dealer_array, dealer_score) 
  @dealer_score = 0

  dealer_array.each do |elem|

    if elem.include? "Jack"
    @dealer_score +=10
    elsif elem.include? "Queen"
    @dealer_score +=10
    elsif elem.include? "King"
    @dealer_score +=10
    else
    @dealer_score += elem[0] 
    end
  end
end

def hit_stick(player_array, player_score, deck, dealer_array, dealer_score)
  puts "Do you want to hit[h] or stick[s]?"

  answer = gets.chomp
  case answer 
  when answer = "h"
    player_array << deck.pop
    puts "Player's hand contains #{player_array}"
    puts "dealer's hand contains #{dealer_array}"
    calculate_player_hand(player_array, @player_score)
    calculate_dealer_hand(dealer_array, @dealer_score)
    check_win(@player_score, @dealer_score)
  when answer = "s"
    dealer_array << deck.pop
    puts "Player's hand contains #{player_array}"
    puts "dealer's hand contains #{dealer_array}"
    calculate_dealer_hand(dealer_array, @dealer_score)
    calculate_player_hand(player_array, @player_score)
    check_win(@player_score, @dealer_score)
  end
end

def check_win (player_score, dealer_score)
  if @player_score > 21 && @dealer_score < 21
    puts "the player score is #{@player_score}"
    puts "the dealer score is #{@dealer_score}"
    puts "the dealer wins"
    exit
  elsif @player_score < 21 && @dealer_score > 21
    puts "the player score is #{@player_score}"
    puts "the dealer score is #{@dealer_score}"
    puts "the player wins"
    exit
  elsif @player_score == 21 && @dealer_score != 21
    puts "the player score is #{@player_score}"
    puts "the dealer score is #{@dealer_score}"
    puts "the player wins"
    exit
  elsif @dealer_score == 21 && @player_score != 21
    puts "the player score is #{@player_score}"
    puts "the dealer score is #{@dealer_score}"
    puts "the dealer wins"
    exit
  end
end

while @player_score <= 21 && @dealer_score <= 21 do 
hit_stick(player_array, @player_score, deck, dealer_array, @dealer_score)
puts "the player score is #{@player_score}"
puts "the dealer score is #{@dealer_score}"
end

