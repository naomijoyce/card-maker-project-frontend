import React, { Component } from 'react';

class LogInForm extends Component {
  state={

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
            name="current-password" 
            placeholder="Password"/>
          <br/>

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;