#Controls routing for Stations

#INDEX
get '/stations' do
  @stations = Station.all
  @users = User.all
  erb :"stations/index"
end

#NEW
get '/stations/new' do
  @lines = Line.all
  @stations = Station.all
  @user_id = session[:user_id]
  erb :"stations/new"
end

# CREATE
post '/stations' do
  @users = User.all
  Station.create(params[:station])
  redirect "/stations"
end

# SHOW
get '/stations/:id' do
  @station = Station.find(params[:id])
  erb :"stations/show"
end

# EDIT
get '/stations/:id/edit' do
  @user_id = session[:user_id]
  @station = Station.find(params[:id])
  @stations = Station.all
  @lines = Line.all
  erb :"stations/edit"
end

# UPDATE
put '/stations/:id' do
  station = Station.find(params[:id])
  params[:station][:line_ids] ||= []
  station.update_attributes(params[:station])
  redirect "/stations/#{station.id}"
end

# DELETE
delete '/stations/:id' do
  station = Station.find(params[:id])
  station.destroy
  redirect "/stations"
end









