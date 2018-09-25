import React, { Component } from 'react'
import { Notification } from 'bulma/css/bulma.css'
import PropTypes from 'prop-types'
import data from './data'
import App from './App'

class RegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      username: '',
      password: '',
      passwordConfirmation: '',
      errorMsg: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const {username, password, passwordConfirmation} = this.state
    if (passwordConfirmation === password) {
      data.register(username, password)
        .then(user => this.props.setCurrentUser(user))
        .catch(err => {
          this.setState(state => {
            {errorMsg: err.message}
          })
        })
    } else {
      this.setState({errorMsg: 'Your passwords must match'})
    }
    console.log(this.state.errorMsg)
  }

  render () {
    const { name, username, password, passwordConfirmation, errorMsg } = this.state
    return (
      <div>
        <section className='sidebar'>
          <div className='sidebar-container'>
            <h3>Welcome to QuizzaBull!</h3>
            <div>Please Log In or Register</div>
          </div>
        </section>
        <section className='main-container'>
          <div className='register-form-div'>
            <div>
              {errorMsg &&
              <Notification isColor='danger'>
                {errorMsg}
              </Notification>}
            </div>
            <form className='register-form' onSubmit={this.handleSubmit}>

              <h2 id='register-title'>Register</h2>
              <label className='label name'>Name</label>
              <div className='control'>
                <input type='text' className='input name' required value={name} onChange={(e) => this.setState({ name: e.target.value })} />
              </div>
              <label className='label username'>Username</label>
              <div className='control'>
                <input type='text' className='input username' required value={username} onChange={(e) => this.setState({ username: e.target.value })} />
              </div>
              <label className='label password'>Password</label>
              <div className='control'>
                <input type='password' className='input password' required value={password} onChange={(e) => this.setState({ password: e.target.value })} />
              </div>
              <label className='label confirm-password'>Confirm Password</label>
              <div className='control'>
                <input type='password' className='input confirm-password' required value={passwordConfirmation} onChange={(e) => this.setState({ passwordConfirmation: e.target.value })} />
              </div>
              <button type='submit' className='button is-primary register-button'>Register</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}

// RegistrationForm.propTypes = {

// }

export default RegistrationForm

// Register
// Post:
//   Name
//   Username
//   Password
// Return:
//   Name
//   Token
//   Admin?
