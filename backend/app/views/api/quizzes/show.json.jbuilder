json.(@quiz, :id, :title)

json.questions @quiz.questions do |question|
  json.q_id question.id
  json.q_text question.q_text
  json.answers question.answers, :id, :a_text
end
