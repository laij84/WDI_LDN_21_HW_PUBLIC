class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception



  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :first_name, :last_name])      
      devise_parameter_sanitizer.permit(:account_update, keys: [:username, :first_name, :last_name])
    end

    def after_sign_in_path_for(resource)
      posts_path
    end

    def after_sign_out_path_for(resource)
      root_path
    end

end
