import request from 'superagent/superagent.js'

let userToken
// const apiDomain = process.env.REACT_APP_API_DOMAIN
const apiDomain = 'https://quizzabull.herokuapp.com'

// const apiDomain = 'https://quizzlybear-api.herokuapp.com'

const data = {
  setUserToken: (token) => {
    userToken = token
  },
  getUserToken: () => {
    return userToken
  },
  login: (username, password) => {
    return request.post(`${apiDomain}/api/logins`)
      .send({username, password})
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
      .catch(err => {
        if (err.response.statusCode === 422) {
          throw new Error('There is no user with that username')
        }
      })
  },
  register: (username, password, name) => {
    return request.post(`${apiDomain}/api/users`)
      .send({ username, password, name })
      .then(res => res.body)
      .then(user => {
        data.setUserToken(user.token)
        return user
      })
      .catch(err => {
        if (err.response.statusCode === 422) {
          // const errorPass = err.response.body.password
          // const errorName = err.reponse.body.name
          // const errorUser = err.response.body.username
          // let newArray = errorPass.concat(errorUser).concat(errorName)
          throw new Error('test error')
        }
      })
  },
  getQuizzes: () => {
    return request.get(`${apiDomain}/api/quizzes`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => {
        let quizzes = res.body.quizzes
        return (quizzes)
      })
  },
  getPastScores: () => {
    return request.get(`${apiDomain}/api/scores`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body.scores)
  },
  getQuiz: (id) => {
    return request.get(`${apiDomain}/api/quizzes/${id}`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body)
  },
  scoreQuiz: (quizId, answers) => {
    return request.post(`${apiDomain}/api/scores/create`)
      .set('Authorization', `Bearer ${userToken}`)
      .send({quiz_id: quizId, answers: [answers]})
      .then(res =>
        res.body.data.score)
  },
  createQuiz: (quiz) => {
    return request.post(`${apiDomain}/api/quizzes`)
      .set('Authorization', `Bearer ${userToken}`)
      .then(res => res.body)
      .then(createdQuiz => {
        return Object.assign({}, quiz, createdQuiz)
      })
  },
  updateQuiz: (quiz) => {
    return request.put(`${apiDomain}/api/quizzes/${quiz.id}`)
      .set('Authorization', `Bearer ${userToken}`)
  }

}

export default data

// POST     /users/create      user registers
// POST     /login             user logs in  ##Login controller (create login)
// GET      /quizzes           user gets list of published quizzes
// GET      /scores            user gets their previous score(s) for a quiz
// GET      /quiz/:id          user gets questions and answers for a quiz
// POST     /scores            user scores a quiz
// GET      /quizzes           admin gets list of unpublished quizzes
// POST     /quizzes/create    admin creates a new quiz
// POST                        admin adds a question to a quiz
// GET      /quizzes/:id/edit      admin edits a question
// PUT/PATCH
// DELETE                      admin deletes a question
// POST     /quizzes           admin publishes a quiz
