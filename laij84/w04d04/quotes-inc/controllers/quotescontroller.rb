require_relative  '../models/quote'

Quote.new("I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.", "Winston Churchill")
Quote.new("An intelligent man is sometimes forced to be drunk to spend time with his fools.", "Ernest Hemmingway")
Quote.new("Always do sober what you said you'd do drunk. That will teach you to keep your mouth shut.", "Ernest Hemmingway")
Quote.new("You're not drunk if you can lie on the floor without holding on.", "Dean Martin")


{
  id:4,
  author: "Rodney Dangerfield", 
  quote: "I drink too much. The last time I gave a urine sample it had an olive in it."
},
{
  id:5,
  author: "Homer Simpson", 
  quote: "Here’s to alcohol, the cause of, and solution to, all life’s problems."
},
{
  id:6,
  author: "Catherine Zandonella", 
  quote: "Time is never wasted when you’re wasted all the time."
},
{
  id:7,
  author: "Benjamin Franklin", 
  quote: "In wine there is wisdom, in beer there is freedom, in water there is bacteria."

#index
get '/quotes' do
  @quotes = Quote.all
  erb :"quotes/index" 
end

#Create
post '/quotes' do
  quote = params[:quote]
  Quote.new(quote[:text], quote[:author])
  redirect "/quotes"
end

#New 
get '/quotes/new' do
  erb :"quotes/new" 
end

#Show
get '/quotes/:id' do
  @quote = Quote.find_by_id(params[:id])
  erb :"quotes/show" 
end

#Edit
get '/quotes/:id/edit' do
  @quote = Quote.find_by_id(params[:id])
  erb :"quotes/edit" 
end

#Update
put '/quotes/:id' do
  quote = Quote.update_by_id(params[:id], params[:quote])
  # redirect "/quotes/#{quote.id}"
  redirect "/quotes"
end

#delete
delete '/quotes/:id' do
  Quote.delete_by_id(params[:id])
  redirect "/quotes"
end
