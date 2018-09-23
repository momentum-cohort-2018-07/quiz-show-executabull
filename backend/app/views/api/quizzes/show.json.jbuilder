json.(@quiz, :id, :title)

json.questions @quiz.questions, :q_text

json.answers @quiz.questions.answers, :a_text