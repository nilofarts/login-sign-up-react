import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.loginButtonClick = this.loginButtonClick.bind(this);
  }

  loginButtonClick (event) {
    debugger
    event.preventDefault();
    const users = JSON.parse(localStorage.getItem("userdata"));
    console.log("users", users)
    var usernameinput = document.getElementById('email').value;
    var passwordinput = document.getElementById('password').value;
    console.log("usernameinput", usernameinput, passwordinput)
    if (usernameinput === users.email && passwordinput === users.password) {
      alert("Logged in successfully");
      localStorage.setItem("isLoggedIn", "true");
    }
    else {
      localStorage.setItem("isLoggedIn", "false");
      alert("Wrong password");
    }
  }
  render () {
    return (
      <div className="container">
        <form onSubmit={this.loginButtonClick}>
          <h3 className="text-center">Sign In</h3>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" id="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" id="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          <p className="forgot-password text-right">
            Dont have an account? <Link to="/signUp">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;