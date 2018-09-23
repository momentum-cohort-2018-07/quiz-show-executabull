class Api::QuizzesController < ApplicationController
    before_action :verify_authentication
    before_action :admin_user, only: [:create, :destroy, :update]
    
    
    def index
        @quizzes = Quiz.all
      if admin_user 
        render json: @quizzes
      else
        render json: @quizzes.where(published:true)
      end
    end

    def show
        @quiz = Quiz.find(params[:id])
        # render json: { id: @quiz.id, title: @quiz.title,
        #   questions: @quiz.questions.all, answers: questions.answers.all }
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
          render json: { status: 'Deleted, yo'}
        else
          render json: @quiz.errors, status: :unprocessable_entity
        end
    end


  private
    def quiz_params
        params.require(:quiz).permit(:title, :published, :questions)
    end




end