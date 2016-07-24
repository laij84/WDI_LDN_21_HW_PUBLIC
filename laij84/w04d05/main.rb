require 'sinatra'
require 'sinatra/reloader' if development?

require_relative './controllers/recipe_controller'

get "/" do 
  redirect "/recipes"
end