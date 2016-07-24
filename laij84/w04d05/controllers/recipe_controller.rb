require_relative  '../models/recipe'
require_relative  '../data/recipe_data'

def categories
  @categories = ["Breakfast", "Lunch", "Dinner"]
end

#Index
get '/recipes' do
  @recipes = Recipe.all
  erb :"recipes/index" 
end

#Breakfast
get '/recipes/breakfast' do
  @recipes = Recipe.all
  erb :"recipes/breakfast" 
end

#Lunch
get '/recipes/lunch' do
  @recipes = Recipe.all
  erb :"recipes/lunch" 
end

#Dinner
get '/recipes/dinner' do
  @recipes = Recipe.all
  erb :"recipes/dinner" 
end

#About
get '/recipes/about' do
  @recipes = Recipe.all
  erb :"recipes/about" 
end

# Create
post '/recipes' do
  recipe = params[:recipe]
  Recipe.new(recipe[:title], recipe[:author], recipe[:image], recipe[:category], recipe[:description], recipe[:recipe_url])
  redirect "/recipes"
end

#New 
get '/recipes/new' do
  @categories = categories
  erb :"recipes/new" 
end

#Show
get '/recipes/:id' do
  @recipe = Recipe.find_by_id(params[:id])
  erb :"recipes/show" 
end

#edit
get '/recipes/:id/edit' do
  @recipe = Recipe.find_by_id(params[:id])
  @categories = categories
  erb :"recipes/edit" 
end

#update
put '/recipes/:id' do
  recipe = Recipe.update_by_id(params[:id], params[:recipe])
  @categories = categories
  redirect "/recipes/#{recipe.id}"
end

#delete
delete '/recipes/:id' do
  Recipe.delete_by_id(params[:id])
  redirect "/recipes"
end


