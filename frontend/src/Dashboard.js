import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import data from './data'
import Quiz from './Quiz'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      quizzes: []
    }
  }

  componentDidMount () {
    const {currentUser} = this.props
    console.log(this.state.quizzes)
    if (currentUser && currentUser.token) {
      data.setUserToken(currentUser.token)
      data.getQuizzes().then(quizzes => {
        this.setState(state => ({quizzes}))
      })
      console.log(this.state.quizzes)
    }
  }

  render () {
    const { currentUser, id } = this.props
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            {/* <h3>Welcome!</h3> */}
            {/* <h3>Welcome, {currentUser.name}!</h3> */}
            <div><a className='past-scores'>Past Scores</a></div>
            <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
          </div>
        </section>
        <section className='main-container'>
          <div><h1>Quizzes</h1></div>
          <div className='quizzes-display'>
            {this.state.quizzes.map((quiz) =>
              <Quiz key={quiz.id} quiz={quiz} />
            )}
          </div>
        </section>
      </div>
    )
  }
}

export default Dashboard

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
