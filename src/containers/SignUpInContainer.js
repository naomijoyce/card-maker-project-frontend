import React, { Component } from 'react';
import LogInForm from "../components/LogInForm";
import SignUpForm from "../components/SignUpForm";

class SignUpInContainer extends Component {
  render() {
    return (
      <div>
        sign in or sign up container!
        <LogInForm />
        <SignUpForm />
      </div>
    );
  }
}

export default SignUpInContainer;