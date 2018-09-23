import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import data from './data'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount () {
    const {currentUser} = this.props
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuizzes().then(quizzes => this.setState(state => ({quizzes: quizzes})))
    }
  }

  render () {
    const { currentUser, id } = this.props
    const { quizzes } = this.state
    console.log()

    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            <h3>Welcome!</h3>
            {/* <h3>Welcome, {currentUser.name}!</h3> */}
            <a className='past-scores'>Past Scores</a>
            <button className='button logout-button' onClick={this.props.logout} >Log Out</button>
          </div>
        </section>
        <section className='main-container'>
            <div><h1>Quizzes</h1></div>
          <div className='quizzes-display'>
            
            {/* {this.state.quizzes.map((quiz) =>
              <QuizOverview quizzes={quizzes} />
            )} */}
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard

const QuizOverview = ({ quiz }) => {
  return (
    <div className='quiz-overview'>
      <a className='quiz-content'>
        <div className='quiz-title has-text-weight-bold'> title</div>
        <div classname='question-count'>question number</div>
      </a>
    </div>
  )
}
// Dashboard
// USER if published quiz
// Get:
//   Quiz names
//   Taken?
//     Score
//   Quiz_id
//   Number of questions
// ADMIN
//   Unpublished quiz info
