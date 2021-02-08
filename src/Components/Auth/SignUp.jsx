import React, { Component } from 'react';
import '../../Styles/AuthForm.css';
import axios from 'axios';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      verifiedPassword: '',
      image: '',
    };
    this.handleFormChange = this.handleFormChange.bind(this);
    this.SignUserUp = this.SignUserUp.bind(this);
  }
  handleFormChange(e) {
    this.setState({
      [e.target.id]: e.target.files ? e.target.files[0] : e.target.value,
    });
  }
  SignUserUp(e) {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append('email', this.state.email);
    form_data.append('password', this.state.password);
    form_data.append('verifiedPassword', this.state.verifiedPassword);
    form_data.append('image', this.state.image);

    const baseURL = {
      dev: 'http://localhost:5000/api/signup',
      prod: 'https://bloggin-demo.herokuapp.com/api/signup',
    };
    const url = process.env.NODE_ENV === 'production' ? baseURL.prod : baseURL.dev;

    axios
      .post(url, form_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="form-wrapper">
        <form className="form form-signup">
          <h1 className="form-header">Sign Up</h1>
          <label>Email</label>
          <input onChange={this.handleFormChange} id="email" className="auth-inputField" type="text" placeholder="Enter email" />
          <label>Password</label>
          <input
            onChange={this.handleFormChange}
            id="password"
            className="auth-inputField"
            type="password"
            placeholder="Enter password"
          />{' '}
          <label>Confirm Password</label>
          <input
            onChange={this.handleFormChange}
            id="verifiedPassword"
            className="auth-inputField"
            type="password"
            placeholder="Confirm password"
          />
          <label>Profile Picture</label>
          <input className="auth-inputField" id="image" type="file" onChange={this.handleFormChange} />
          <button onClick={this.SignUserUp} className="btn">
            SignUp
          </button>
        </form>
      </div>
    );
  }
}

export { SignUp };
