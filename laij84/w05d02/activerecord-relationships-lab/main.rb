require "sinatra/reloader" if development?

Dir["#{File.dirname(__FILE__)}/**/*.rb"].each{ |f| also_reload f }

# Load models
Dir[File.dirname(__FILE__) + '/models/*.rb'].each { |file| require file }