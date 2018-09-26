import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import TakeQuiz from './TakeQuiz'

class QuizListAdmin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: true
    }
    this.handleClick = this.handleClick.bind(this)
    // this.renderTakeQuiz = this.renderTakeQuiz.bind(this)
  }

//   renderTakeQuiz () {
//     const { unpubQuizzes, currentUser } = this.props
//     console.log(unpubQuizzes)
//     return (
//       <div>
//         <section className='sidebar'>
//           <div className='sidebar-container'>
//             <h3>Welcome, {currentUser.name}!</h3>
//             <div><NavLink to='/' className='quizzes-home'>Quizzes</NavLink></div>
//             <div><button className='button logout-button' onClick={this.props.logout} >Log Out</button></div>
//           </div>
//         </section>
//         <section className='main-container'>
//           <h1 className='take-quiz-title'>{unpubQuizzes.quiz_title}</h1>
//           <div className='take-quiz-display'>
//             {unpubQuizzes.map((quiz, quizId) =>
//               <TakeQuiz key={quizId} currentUser={currentUser} setcurrentUser={this.setCurrentUser} quiz={quiz} />
//             )}
//           </div>
//         </section>
//       </div>
//     )
//   }

  handleClick () {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render () {
    let { unpubQuizzes } = this.props
    return (
      <div>
        {this.state.expanded
          ? (<div>
            <button className='button unpublished-title' onClick={this.handleClick}> &#x25BC; Unpublished Quizzes</button>
            <div>{unpubQuizzes.map((quiz) =>
              <div key={quiz.quiz_id} className='overview-container'>
                <NavLink to={`/quizzes/${quiz.quiz_id}`}>
                  <div className='quiz-title has-text-weight-bold'>{quiz.quiz_title}</div>
                  <div className='question-count'>{quiz.q_num} Questions</div>
                </NavLink> <button className='edit-quiz'>Edit Quiz</button></div>
            )}</div>
            <div className='published-title'>Published Quizzes</div>
          </div>)
          : (<div>
            <button className='button unpublished-title' onClick={this.handleClick}> &#x25B6; Unpublished Quizzes</button>
            <div className='published-title'>Published Quizzes</div>
          </div>
          )}
      </div>
    )
  }
}

export default QuizListAdmin
