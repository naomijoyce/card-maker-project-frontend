import React, { Component } from 'react';

class SignUpForm extends Component {
  state={

  }

  render() {
    return (
      <div className="signup">
        <form className="signup-form">
          <input 
            type="text" 
            name="firstName"
            placeholder="First Name"/> 

          <input 
            type="text" 
            name="lastName"
            placeholder="Last Name"/>
          <br/>

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

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default SignUpForm;