class Shelter

  attr_reader :name, :clients, :animals, :adopt_animals

  def initialize(name)
    @name = name
    @clients = []
    @animals = []
    @adopt_animals = []
  end

  def add_client(name, age, gender, number_of_pets)
    client = Client.new(name, age, gender, number_of_pets)
    @clients << client
  end

  def get_client(index)
    @clients[index]
  end

  def add_animal(name, breed, age, gender, toys, adopt)
    animal = Animal.new(name, breed, age, gender, toys, adopt)
    if animal.adopt == "y"
      @adopt_animals << animal
    else 
      @animals << animal
    end
  end

  def get_adopt_animal(index)
    @animals[index]
  end

  def remove_adopt_animal(adopt_animal_idx)
    @adopt_animals.delete_at(adopt_animal_idx)
  end

end

