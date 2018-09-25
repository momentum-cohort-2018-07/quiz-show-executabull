class Api::QuizzesController < ApplicationController
  before_action :verify_authentication
  before_action :admin_user, only: %i[create destroy update]

  def index
    if admin_user
      @quizzes = Quiz.all
    else
      @quizzes = Quiz.where(published: true)
    end
    render :index
  end


  def show
    @quiz = Quiz.find(params[:id])
    render :show
  end

  def create
    @quiz = Quiz.new(quiz_params)
    if @quiz.save
      render json: @quiz, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def update
    @quiz = Quiz.find(params[:id])
    if @quiz.update(quiz_params)
      render json: @quiz, status: :created
    else
      render json: @quiz.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @quiz = Quiz.find(params[:id])
    if @quiz.destroy
      render json: { status: 'Deleted, yo' }
    else
      render json: @quiz.errors, status: :unprocessable_entity

    end
  end

  private

  def quiz_params
    params.require(:quiz).permit(:title, :published, :questions)
  end
end
