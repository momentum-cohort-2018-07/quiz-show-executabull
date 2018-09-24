json.quizzes @quizzes do |quiz|
  json.quiz_id quiz.id
  json.quiz_title quiz.title
  json.published quiz.published?
  json.q_num quiz.questions.count
end
