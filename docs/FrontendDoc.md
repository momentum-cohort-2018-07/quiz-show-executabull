## Components: 

#App.js:
    State: currentUser

#LoginForm:
    Props: currentUser, setcurrentUser

    State: Username, password, errorMsg

    Methods: HandleSubmit

#RegistrationForm:
    Props: currentUser, setcurrentUser

    State: name, username, password, passwordConfirmation, errorMsg

    Methods: HandleSubmit

#Dashboard: 
    Props: currentUser, setcurrentUser, logout

    State: quizzes

    Methods: CreateQuiz, UpdateQuiz

#Quiz: 
    Props: key (quiz.id), quiz

#Results: 
    Props: currentUser, setcurrentUser, logout, quiz, quiz scores

#TakeQuiz: 
    Props: currentUser, setcurrentUser, logout

#NewQuiz:
    Props: currentUser, setcurrentUser, logout, CreateQuiz, UpdateQuiz

    State: editing, text


#UpdateQuiz: 
    Props: currentUser, setcurrentUser, logout, quiz/quiz id, UpdateQuiz

    State: text for each field: question and answers


#PastScores:
    Props: currentUser, setcurrentUser, logout



