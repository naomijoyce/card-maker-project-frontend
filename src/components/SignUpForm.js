import React, { Component } from 'react';
import { connect } from "react-redux";
import { creatingNewUser } from "../thunks/userThunk";
import { withRouter } from "react-router-dom";

class SignUpForm extends Component {
  state={
    first_name: "",
    last_name: "",
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
    console.log(event);
    this.props.creatingNewUser(this.state)
    this.props.history.push("/")
  }

  render() {
    return (
      <div className="signup">
        <form className="signup-form" onSubmit={this.submitHandler}>
          <input 
            type="text" 
            name="first_name"
            value={this.state.first_name}
            onChange={this.changeHandler}
            placeholder="First Name"/> 

          <input 
            type="text" 
            name="last_name"
            value={this.state.last_name}
            onChange={this.changeHandler}
            placeholder="Last Name"/>
          <br/>

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
            value={this.state.password}
            onChange={this.changeHandler}
            placeholder="Password"/>
          <br/>

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    creatingNewUser: (userInfo) => dispatch(creatingNewUser(userInfo))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));