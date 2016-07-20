class Shelter

  attr_reader :name, :clients

  def initialize(name)
    @name = name
    @clients = []
  end

  def add_client(name, age, gender, number_of_pets)
    client = Client.new(name, age, gender, number_of_pets)
    @clients << client
  end

end
