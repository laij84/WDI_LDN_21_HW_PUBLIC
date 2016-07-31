#Controls routing for Posts

#INDEX
get '/posts' do
  @posts = Post.all
  @users = User.all
  erb :"posts/index"
end

#NEW
get '/posts/new' do
  authorize!
  @lines = Line.all
  @stations = Station.all
  @user_id = session[:user_id]
  erb :"posts/new"
end

# CREATE
post '/posts' do
  authorize!
  @users = User.all
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
  authorized_user!
  @user_id = session[:user_id]
  @post = Post.find(params[:id])
  @stations = Station.all
  @lines = Line.all
  erb :"posts/edit"
end

# UPDATE
put '/posts/:id' do
  authorized_user!
  post = Post.find(params[:id])
  params[:post][:station_ids] ||= []
  post.update_attributes(params[:post])
  redirect "/posts/#{post.id}"
end

# DELETE
delete '/posts/:id' do
  authorized_user!
  post = Post.find(params[:id])
  post.destroy
  redirect "/posts"
end









