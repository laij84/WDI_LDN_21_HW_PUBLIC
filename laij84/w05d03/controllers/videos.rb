
#INDEX
get '/videos' do
  @videos = Video.all
  erb :"videos/index"
end

#NEW
get '/videos/new' do
  erb :"videos/new"
end

#CREATE
post '/videos' do
  Video.create(params[:video])
  redirect '/videos'
end 

#SHOW
get '/videos/:id' do
  @video = Video.find(params[:id])
  erb :"videos/show"
end