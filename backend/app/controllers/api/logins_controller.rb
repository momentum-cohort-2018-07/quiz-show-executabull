class Api::LoginsController < ApplicationController
  skip_before_action :verify_authentication

  def create
    @user = User.find_by_username(params[:username])
    if @user && @user.authenticate(params[:password])
      render json: { name: @user.name, token: @user.token }
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
end
