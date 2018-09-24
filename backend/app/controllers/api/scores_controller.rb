class Api::ScoresController < ApplicationController
  
  def show
  end


  def create
    @correct_count = 0
    @submitted = params[:answer_id]
    @submitted.each do |c|
      if Answer.find(c).correct?
        @correct_count += 1
      end
    end

    Score.create!(
      quiz_id: params[:quiz_id], 
      user_id: current_user.id, 
      score: @correct_count
      
    )

    render json: {"Ay, yo - your score is": @current_count}
  end

  private 
  def scores_params
    params.permit(:answer_id)
  end

end
