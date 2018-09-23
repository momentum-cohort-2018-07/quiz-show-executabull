class Api::AnswersController < ApplicationController

    before_action :verify_authentication
    before_action :admin_user


    def create
        @question = Question.find(params["question_id"])
        @answer = Answer.new(answer_params)
            if @answer.save
                render json: @answer
            else
                render json: @answer.errors, status: :unprocessable_entity
            end
    end

    def destroy
        @answer.destroy
    end

    private

    def answer_params
        params.permit(:question_id, :a_text, :correct)

end