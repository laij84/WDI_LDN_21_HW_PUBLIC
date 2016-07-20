class Animal

  attr_reader :name, :breed, :age, :gender, :toys, :adopt

  def initialize (name, breed, age, gender, toys, adopt)
    @name = name
    @breed = breed
    @age = age
    @gender = gender
    @toys = toys
    @adopt = adopt
  end

  def to_s
    "Name: #{name}, Breed: #{breed}, Age: #{age}, Gender: #{gender}, Toys: #{toys} Adopt: #{adopt}"
  end

end
