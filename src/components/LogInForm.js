import React, { Component } from 'react';
import { connect } from "react-redux";

class LogInForm extends Component {
  state={
    email: "",
    currentPassword: ""
  }

  render() {
    return (
      <div className="login">
        <form className="login-form">
          <input 
            type="text" 
            name="email"
            placeholder="Email Address"/>
          <br/>

          <input 
            type="password"
            name="currentPassword" 
            placeholder="Password"/>
          <br/>

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;