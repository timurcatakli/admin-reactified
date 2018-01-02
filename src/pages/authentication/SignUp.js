import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { auth } from 'helpers'
const SignUpPage = ({ history }) => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm history={history} />
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/', {
      dataType: 'json'
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({
          email: data.results[0].email,
          username: data.results[0].login.username,
          passwordOne: '123456',
          passwordTwo: '123456'
        })
      })
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state
    const { history } = this.props

    console.log('onSubmit', event)
    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        history.push('/dashboard')
        this.setState(() => ({ ...INITIAL_STATE }))
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })
    event.preventDefault()
  }

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <br />
        <input
          value={username}
          onChange={event =>
            this.setState(byPropKey('username', event.target.value))
          }
          type="text"
          placeholder="Full Name"
        />
        <br />
        <input
          value={email}
          onChange={event =>
            this.setState(byPropKey('email', event.target.value))
          }
          type="text"
          placeholder="Email Address"
        />
        <br />
        <input
          value={passwordOne}
          onChange={event =>
            this.setState(byPropKey('passwordOne', event.target.value))
          }
          type="password"
          placeholder="Password"
        />
        <br />
        <input
          value={passwordTwo}
          onChange={event =>
            this.setState(byPropKey('passwordTwo', event.target.value))
          }
          type="password"
          placeholder="Confirm Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to="/signup">Sign Up</Link>
  </p>
)

export default withRouter(SignUpPage)
export { SignUpForm, SignUpLink }
