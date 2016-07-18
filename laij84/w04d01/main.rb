nline = ["times square", "34th", "28th", "23rd", "union square", "8th"]

lline = ["8th", "6th", "union square", "3rd", "1st"]

sline = ["grand central", "33rd", "28th", "23rd", "union square", "astor place"]

#Ask for startline / startstop
puts "Which line are you on [n]line [l]line) or [s]line?"
startline = gets.chomp
case startline
  when "n" 
    puts nline
    puts "Which stop are you at? Select one of the above options." 
    startstop = gets.chomp.downcase
  when "l" 
    puts lline
    puts "Which stop are you at? Select one of the above options." 
    startstop = gets.chomp.downcase
  when "s" 
    puts sline
    puts "Which stop are you at? Select one of the above options." 
    startstop = gets.chomp.downcase
  else 
    puts "I don't understand. Goodbye"
    exit
  end

#Ask for endline / endstop
puts "Which line is your destination on, [n]line [l]line) or [s]line?"
endline = gets.chomp

case endline
  when "n" 
    puts nline
    puts "Which stop are you going to? Select one of the above options." 
    endstop = gets.chomp.downcase
  when "l" 
    puts lline
    puts "Which stop are you going to? Select one of the above options."  
    endstop = gets.chomp.downcase
  when "s" 
    puts sline
    puts "Which stop are you going to? Select one of the above options."  
    endstop = gets.chomp.downcase
  else 
    puts "I don't understand. Goodbye."
    exit
  end

if startline == endline

  case startline
  when "n"
    distance1 = (nline.index(startstop) - nline.index(endstop)).abs

  when "l"
    puts "Which stop are you at?" 
    puts lline
    distance1 = (lline.index(startstop) - lline.index(endstop)).abs

  when "s"
    puts "Which stop are you at?" 
    puts sline
    distance1 = (sline.index(startstop) - sline.index(endstop)).abs  
  end

puts "You need to travel #{distance1} stops to reach your destination." 

elsif startline != endline

  case startline
  when "n"
    distance1 = (nline.index(startstop) - nline.index("union square")).abs

  when "l"
    distance1 = (lline.index(startstop) - lline.index("union square")).abs

  when "s"
    distance1 = (nline.index(startstop) - nline.index("union square")).abs  
  end

#Endline Calculation
  case endline
  when "n"
      distance2 = (nline.index(endstop) - nline.index("union square")).abs

  when "l"
    distance2 = (lline.index(endstop) - lline.index("union square")).abs

  when "s"
    distance2 = (sline.index(endstop) - sline.index("union square")).abs 
end

totaldistance = distance1+distance2

puts "You need to travel #{totaldistance} stops to reach your destination." 
end

