class Api::ScoresController < ApplicationController
  def show
  end

  def index
    @scores = Score.all
  end

  def create
    @correct_count = 0

    answers = params[:answers]
    answers.each do |answer|
      a_id = Answer.find(answer)
      @correct_count += a_id.correct
    end

    Score.create!(
      quiz_id: params[:quiz_id],
      user_id: params[:user_id],
      score: @correct_count
    )

    render json: { "Score": @correct_count }
  end

  private

  def scores_params
    params.permit(:answer_id)
  end
end
