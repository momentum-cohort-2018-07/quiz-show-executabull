class Api::QuestionsController < ApplicationController
    before_action :verify_authentication
    before_action :admin_user, only: [:create, :destroy, :update]
    
    
    def index
      @quiz = Quiz.find(params[:quiz_id])
      @questions = Question.where(:quiz_id => @quiz.id)
      render json: @questions
    end

    def show
        @question = Question.find(params[:quiz_id])
        render json: @question
    end

    def create
      @quiz = Quiz.find(params[:quiz_id])
      @question = @quiz.questions.create(question_params)
      if @question.save
      render json: @question
      else
        render json: @question.errors, status: :unprocessable_entity
      end
    end
    
    def update 
      @question = Question.find(params[:id])
      if @question.update(question_params)
      render json: @question, status: :created
      else 
        render json: @question.errors, status: :unprocessable_entity
      end
    end
    
    def destroy
        @question = Question.find(params[:id])
        if @question.destroy
          render json: { status: 'Deleted, yo'}
        else
          render json: @question.errors, status: :unprocessable_entity
        end
    end


  private
    def question_params
        params.require(:question).permit(:quiz_id, :q_text)
    end




end