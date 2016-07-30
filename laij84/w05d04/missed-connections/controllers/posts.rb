#Controls routing for Posts

#INDEX
get '/posts' do
  erb :"posts/index"
end

#NEW
get '/posts/new' do
  @stations = Station.all
  erb :"posts/new"
end

# CREATE
post '/posts' do
  Post.create(params[:post])
  redirect "/posts"
end

# SHOW
get '/posts/:id' do
  @post = Post.find(params[:id])
  erb :"posts/show"
end

# EDIT
get '/posts/:id/edit' do
  @post = Post.find(params[:id])
  @stations = Station.all
  erb :"posts/edit"
end

# UPDATE
put '/posts/:id' do
  authorize!
  post = Post.find(params[:id])
  params[:post][:station_ids] ||= []
  post.update_attributes(params[:post])
  redirect "/posts/#{post.id}"
end

# DELETE
delete '/posts/:id' do
  authorize!
  post = Post.find(params[:id])
  post.destroy
  redirect "/posts"
end









