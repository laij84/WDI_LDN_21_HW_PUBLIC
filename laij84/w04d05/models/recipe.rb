class Recipe

  attr_accessor :title, :author, :image, :category, :description, :recipe_url
  attr_reader :id

  @@id = 1
  @@recipes = []

  def initialize(title, author, image, category, description, recipe_url)
    @id = @@id

    @title = title
    @author = author
    @image = image
    @category = category
    @description = description
    @recipe_url = recipe_url

  @@id+=1
  @@recipes << self

  end

  def self.all
    @@recipes
  end

  def self.find_by_id(id)
    @@recipes.find { |recipe| recipe.id == id.to_i }
  end

  def self.update_by_id(id, data)
    recipe = find_by_id(id)
    recipe.title = data[:title]
    recipe.author = data[:author]
    recipe.image = data[:image]
    recipe.category = data[:genre]
    recipe.description = data[:description]
    recipe.recipe_url = data[:recipe_url]

    recipe
  end

  def self.delete_by_id(id)
    recipe = find_by_id(id)
    @@recipes.delete(recipe)
  end

end

