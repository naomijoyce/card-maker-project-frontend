import React, { Component } from 'react';
import { connect } from "react-redux";

class LogInForm extends Component {
  state={
    email: "",
    currentPassword: ""
  }

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })  
  }

  submitHandler = (event) => {

  }



  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.submitHandler}>
          <input 
            type="text" 
            name="email" 
            value={this.state.email}
            onChange={this.changeHandler}
            placeholder="Email Address"/>
          <br/>

          <input 
            type="password"
            name="currentPassword" 
            value={this.state.currentPassword}
            onChange={this.changeHandler}
            placeholder="Password"/>
          <br/>

          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogInForm;