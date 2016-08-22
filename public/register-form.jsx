import React, {Component} from 'react';
import request from 'superagent';

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return <form onSubmit={this._onSubmit.bind(this)}>
      <div>
        Register
      </div>
      <div>
        <input type="text" placeholder="username" onChange={event => {
          this.setState({username: event.target.value})
        }}/>
      </div>
      <div>
        <input type="password" placeholder="password" onChange={event => {
          this.setState({password: event.target.value})
        }}/>
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  }

  _onSubmit(event) {
    event.preventDefault();
    request
      .post('/api/users')
      .send({
        username: this.state.username,
        password: this.state.password
      })
      .end((err, res) => {
        if (err) return console.log(err);
        console.log(res);
        alert('successful!');
      })
  }
}