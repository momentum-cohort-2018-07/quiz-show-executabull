class Api::ScoresController < ApplicationController
  def show
  end

  def index
    @scores = Score.all
  end

  def create
    @correct_count = 0
    @user = User.find_by_api_token(params[:token])
    answers = params[:answers]
    answers.each do |answer|
      a_id = Answer.find(answer)
      @correct_count += a_id.correct
    end

    Score.create!(
      quiz_id: params[:quiz_id],
      user_id: @user.id,
      score: @correct_count
    )

    render json: { "Score": @correct_count }
  end

  private

  def scores_params
    params.permit(:answer_id)
  end
end
