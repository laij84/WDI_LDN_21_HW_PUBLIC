get '/register' do
  @user = User.new
  erb :"authentications/register"
end

post '/register' do
  @user = User.create(params[:user])
  if @user.save
    session[:user_id] = @user.id
    flash[:success] = "Thanks for registering, #{@user.username}!"
    redirect '/'
  else 
    erb :"authentications/register"
  end
end

get '/login' do
  erb :"authentications/login"
end

post '/login' do
user = User.find_by_username(params[:user][:username])
  if user && user.authenticate(params[:user][:password])
    session[:user_id] = user.id
    flash[:success] = "Welcome back, #{user.username}!"
    redirect '/'
  else
    flash[:danger] = "Username or password is incorrect."
    redirect '/login'
  end
end

get '/logout' do
  session.clear
  redirect '/'
end



