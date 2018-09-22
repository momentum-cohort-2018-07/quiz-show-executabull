import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import data from './data'

class LoginForm extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: '',
      errorMsg: null
    }
  }

  handleSubmit (event) {
    event.preventDefault()
    const { username, password } = this.state
    data.login(username, password)
      .then(user => this.props.setCurrentUser(user))
      .catch(err => {
        this.setState({
          errorMsg: err.message
        })
      })
  }

  render () {
      const { username, password, errorMsg } = this.state
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            <h3>Welcome to Quiz-a-Bull!</h3>
            <div>Please Log In or Register</div>
          </div>
        </section>
        <section className='main-container'>
            {/* {errorMsg && <Notification } */}
          <form className='login-form' onSubmit={this.handlesubmit}>
            <h2 id='login-title'>Log In</h2>
            <label className='label username'>Username</label>
            <div className='control'>
              <input type='text' className='input username' value={username} required onChange={(e) => this.setState({ username: e.target.value })} />
            </div>
            <label className='label password'>Password</label>
            <div className='control'>
              <input type='password' className='input password' value={password} required onChange={(e) => this.setState({ password: e.target.value })} />
            </div>
            <div className='register-info'>
              <span className='register'>Click here to</span>&nbsp;
              <a className='register'>Register</a>
            </div>
            <button type='submit' className='button is-primary login-button'>Sign In</button>
          </form>
        </section>
      </div>
    )
  }
}

export default LoginForm

// #Login
// Post:
//   Username
//   Password
// Return:
//   Name
//   Token
//   Admin?
