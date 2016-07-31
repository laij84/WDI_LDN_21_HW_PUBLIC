helpers do
  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def is_logged_in?
  !!current_user
  end 


  def authorize!
    unless is_logged_in?
      flash[:danger] = "You must be logged in to see this page."
      redirect '/login'
    end
  end

  def authorized_user!
    current_user = User.find(session[:user_id])
    post = Post.find(params[:id])
    unless is_logged_in? && post.user_id == current_user.id
      flash[:danger] = "You cannot edit/delete this page."
      redirect '/login'
    end
  end


end


