class Api::UsersController < ApplicationController
  skip_before_action :verify_authentication

  def new
    @user = User.new
  end

  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors
    end
  end

  private

  def user_params
    params.permit(:name, :username, :password, :admin)
  end
end
