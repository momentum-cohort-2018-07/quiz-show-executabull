import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import data from './data'
// import Quiz from './Quiz'

class TakeQuiz extends Component {
  constructor () {
    super()
    this.state = {
      selectedQuiz: []
    }
    this.startQuiz = this.startQuiz.bind(this)
  }

  componentDidMount () {
    this.startQuiz()
  }

  startQuiz () {
    const { currentUser, selectQuiz } = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuiz(selectQuiz).then(quiz => {
        this.setState(state => ({quiz}))
      }
      )
    }
  }

  render () {
    let { selectedQuiz } = this.state
    // console.log(this.props.selectQuiz, 'selectQuiz')
    console.log(selectedQuiz, 'quiz')
    return (
      <div className='question-div'>
        {selectedQuiz.map((quiz) =>
          <div>
            <div className='taking-quiz-title'>{selectedQuiz.quiz_id}</div>
            <div className='question'>question</div>
            {quiz.questions.answers.map((answer) =>
              <input key={quiz.quiz_id} type='radio'>{quiz.answer}</input>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default TakeQuiz
