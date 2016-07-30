require "sinatra/reloader" if development?

Dir["#{File.dirname(__FILE__)}/**/*.rb"].each{ |f| also_reload f }

Dir[File.dirname(__FILE__) + '/models/*.rb'].each { |file| require file }

Dir[File.dirname(__FILE__) + '/controllers/*.rb'].each { |file| require file }