class ApplicationController < ActionController::API
    include ActionController::HttpAuthentication::Token::ControllerMethods
    
    
    before_action :verify_authentication
    


    def verify_authentication
        unless current_user
          render json: {error: "You don't have permission to access these resources, yo"}, status: :unauthorized
        end
    end

    def admin_user
       current_user.admin
    end

    protected

        def current_user
            @current_user ||= authenticate_with_http_token do |token, options|
                User.find_by_api_token(token)
            end
        end


end
