json.(@quiz, :id, :title)

json.questions @quiz.questions do |question|
  json.question question.q_text
  json.answers question.answers, :a_text
end
