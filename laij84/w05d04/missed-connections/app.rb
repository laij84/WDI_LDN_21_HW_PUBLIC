require "sinatra/reloader" if development?

Dir["#{File.dirname(__FILE__)}/**/*.rb"].each{ |f| also_reload f }

Dir[File.dirname(__FILE__) + '/models/*.rb'].each { |file| require file }

Dir[File.dirname(__FILE__) + '/lib/*.rb'].each { |file| require file }

Dir[File.dirname(__FILE__) + '/helpers/*.rb'].each { |file| require file }

Dir[File.dirname(__FILE__) + '/controllers/*.rb'].each { |file| require file }

# Configure sessions
configure do
  enable :sessions
  set :session_secret, ENV['SESSION_SECRET'] || "password"
end

# Register sinatra-flash
register Sinatra::Flash