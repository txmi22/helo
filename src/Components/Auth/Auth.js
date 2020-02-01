import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { login, register } from "../../ducks/reducer";

class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      loginToggle: true
    }
  }

  toggleLogin = () => {
    this.setState({
      loginToggle: !this.state.loginToggle
    })
  }

  handleChange = e => {
      const {name, value} = e.target
      this.setState({
        [name]: value
    })
  }

  login = (username, password) => {
    axios.post('/auth/login', {username, password})
    .then(res => {
      console.log(res)
      this.props.history.push('/dashboard')
    })
  }
  register = (username, password) => {
     axios.post('/auth/register', {username, password})
     .then(res => {
       console.log(res)
       this.props.history.push('/')
     })
  }
  render(){
    const {username, password, loginToggle} = this.state
    return(
      <div className='auth-container'>
        <div className='auth-box'>
          {loginToggle ?(
            <button onClick={this.toggleLogin}>Register</button>
          ) : (
            <button onClick={this.toggleLogin}>Login</button>
          )}
          <div className='input-box'>
            <p>{'Username:'}{``}</p>
            <input name ='username'
                   value={this.state.username}
                   onChange={e => this.handleChange(e)}
                   />
          </div>
          <div className='input-box'>
            <p>{'Password:'}{``}</p>
            <input
                  name='password'
                  value={this.state.password}
                  onChange={e => this.handleChange(e)}
                />
            </div>
          {loginToggle ? (
              <button onClick={() => this.login(username, password)}>Login</button>
            ): (
              <button onClick={() => this.register(username, password)}>Register</button>
            )}
        </div>
      </div>
    )
  }
}
  
export default connect(state => state, {login, register}) (Auth);
