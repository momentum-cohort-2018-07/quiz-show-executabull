class Api::ScoresController < ApplicationController
  def show; end

  def create
    @correct_count = 0
    @user.id = user_id
    @quiz.id = quiz_id
    @answers.each do
      @correct_count += @answer.correct
    end

    Score.create!(
      quiz_id: params[:quiz_id],
      user_id: current_user.id,
      score: @correct_count
    )

    render json: { "Ay, yo - your score is": @current_count }
  end

  private

  def scores_params
    params.permit(:answer_id)
  end
end
