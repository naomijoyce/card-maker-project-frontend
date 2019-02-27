import React, { Component } from 'react';
import { connect } from "react-redux";
import { loggingInUser } from "../thunks/userThunk";
import { withRouter } from "react-router-dom";

class LogInForm extends Component {
  state={
    email: "",
    password: ""
  }

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })  
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.loggingInUser(this.state)
    this.props.history.push("/")
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
            name="password" 
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

const mapDispatchToProps = (dispatch) =>{
  return{
    loggingInUser: (loginCredentials) => dispatch(loggingInUser(loginCredentials))
  }
 
}

export default withRouter(connect(null, mapDispatchToProps)(LogInForm));