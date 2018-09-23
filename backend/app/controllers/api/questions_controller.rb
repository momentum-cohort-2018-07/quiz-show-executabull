class Api::QuestionsController < ApplicationController
    before_action :verify_authentication
    before_action :admin_user, only: [:create, :destroy, :update]
    
    
    def index
        @questions = Question.all
      if admin_user 
        render json: @questions
      else
        render json: @questions.where(published:true)
      end
    end

    def show
        @question = Question.find(params[:id])
        render json: @question
    end

    def create
        @question = Question.new(question_params)
        if @question.save 
           render json: @question, status: :created
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
        params.require(:question).permit(:quiz_id, :q_text, :answers)
    end




end