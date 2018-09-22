import React, { Component } from 'react'
import 'bulma/css/bulma.css'

class Dashboard extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      errorMsg: null
    }
  }

  render () {
    const { currentUser } = this.props
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            <h3>Welcome, {currentUser.name}!</h3>
            <a classname='past-scores'>Past Scores</a>
            <button className='button logout-button'>Log Out</button>
          </div>
        </section>
        <section className='main-container'>
          <h1>Quizzes</h1>
        
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
