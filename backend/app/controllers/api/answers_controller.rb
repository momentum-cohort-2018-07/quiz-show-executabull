class Api::AnswersController < ApplicationController

    before_action :verify_authentication
    before_action :admin_user, only: [:create, :update, :destroy]


    def index
        @question = Question.find(params[:question_id])
        @answers = Answer.where(:question_id => @question.id)
        render json: @answers
    end
    
    def create
        @question = Question.find(params["question_id"])
        @answer = Answer.new(answer_params)
            if @answer.save
                render json: @answer
            else
                render json: @answer.errors, status: :unprocessable_entity
            end
    end

    def show
        
        @answer = Answer.find(params[:id])
        render json: @answer
    end

    def update
        @answer = Answer.find(params[:id])
        if @answer.update(answer_params)
            render json: @answer, status: :created
        else
            render json: @answer.errors, status: :unprocessable_entity
        end
    end


    def destroy
        @answer = Answer.find(params[:id])
        if @answer.destroy
            render json: { status: 'Deleted answer, yo'}
        else
            render json: @answer.errors, status: :unprocessable_entity
        end
    end

    private

    def answer_params
        params.permit(:question_id, :a_text, :correct)
    end

end