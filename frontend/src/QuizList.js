import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import TakeQuiz from './TakeQuiz'

class QuizList extends Component {
  // renderTakeQuiz () {
  //   const { quiz, currentUser } = this.props
  //   return (
  //     <div>
  //       <section className='sidebar'>
  //         <div className='sidebar-container'>
  //           <h3>Welcome, {currentUser.name}!</h3>
  //           <div><NavLink to='/' className='quizzes-home'>Quizzes</NavLink></div>
  //           <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
  //         </div>
  //       </section>
  //       <section className='main-container'>
  //         <h1 className='take-quiz-title'>title</h1>
  //         <div className='take-quiz-display'>
  //             <TakeQuiz key={quiz.quiz_id} currentUser={currentUser} setcurrentUser={this.setCurrentUser} quiz={quiz} takeQuiz={this.renderTakeQuiz} />
  //         </div>
  //       </section>
  //     </div>
  //   )
  // }

  render () {
    let { pubQuizzes } = this.props
    console.log(pubQuizzes)
    return (
      <NavLink to={`quizzes/${pubQuizzes.quiz_id}`}>
        <div key={pubQuizzes.quizquiz_id} className='quiz-overview'>
          <div className='quiz-title has-text-weight-bold'>{pubQuizzes.quiz_title}</div>
          <div className='question-count'>{pubQuizzes.q_num} Questions</div>
        </div>
      </NavLink>
    )
  }
}

export default QuizList
