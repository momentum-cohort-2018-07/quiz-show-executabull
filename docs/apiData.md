#Register
Post: 
  Name
  Username
  Password
Return:
  Name
  Token
  Admin?

#Login
Post:
  Username
  Password
Return:
  Name
  Token
  Admin?

#Dashboard
USER if published quiz
Get:
  Quiz names
  Taken?
    Score
  Quiz_id
  Number of questions
ADMIN
  Unpublished quiz info


POST     /users/create      user registers
POST     /login             user logs in  ##Login controller (create login)
GET      /quizzes           user gets list of published quizzes
GET      /scores            user gets their previous score(s) for a quiz
GET      /quiz/:id          user gets questions and answers for a quiz
POST     /scores            user scores a quiz
GET      /quizzes           admin gets list of unpublished quizzes
POST     /quizzes/create    admin creates a new quiz
POST                        admin adds a question to a quiz
GET      /quizzes/:id/edit      admin edits a question
PUT/PATCH
DELETE                      admin deletes a question
POST     /quizzes           admin publishes a quiz

#Score
{
    "user_id": 7,
    "quiz_id": 2,
    "answers": [14, 19, 23]
    
}