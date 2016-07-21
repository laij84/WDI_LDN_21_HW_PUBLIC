require 'sinatra'
require 'sinatra/reloader' if development?

require_relative './controllers/quotescontroller'

get "/" do 
  redirect "/quotes"
end