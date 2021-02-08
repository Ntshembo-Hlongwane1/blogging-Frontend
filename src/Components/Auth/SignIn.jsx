import React, { Component } from 'react';
import '../../Styles/AuthForm.css';
import { withRouter } from 'react-router-dom';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.SignUserIn = this.SignUserIn.bind(this);
  }
  handleFormChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  SignUserIn(e) {
    e.preventDefault();

    const form_data = {
      email: this.state.email,
      password: this.state.password,
    };

    const baseURL = {
      dev: 'http://localhost:5000/api/signin',
      prod: 'https://bloggin-demo.herokuapp.com/api/signin',
    };
    const url = process.env.NODE_ENV === 'production' ? baseURL.prod : baseURL.dev;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(form_data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        response.json().then((data) => {
          if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('profile', data.profile);
            const { history } = this.props;
            history.push('/');
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="form-wrappper">
        <form className="form form-signin">
          <h1 className="form-header">Sign In</h1>
          <label>Email</label>
          <input onChange={this.handleFormChange} id="email" className="auth-inputField" type="text" placeholder="Enter email" />
          <label>Password</label>
          <input
            onChange={this.handleFormChange}
            id="password"
            className="auth-inputField"
            type="password"
            placeholder="Enter password"
          />
          <button onClick={this.SignUserIn} className="btn">
            SignIn
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
