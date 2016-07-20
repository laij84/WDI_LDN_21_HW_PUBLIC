class Client

  attr_reader :name, :age, :gender
  attr_accessor :number_of_pets

  def initialize (name, age, gender, number_of_pets)
    @name = name
    @age = age
    @gender = gender
    @number_of_pets = number_of_pets  
  end

  def to_s
    "Name: #{name}, Age: #{age}, Gender: #{gender}, Pets: #{number_of_pets}"
  end



end

