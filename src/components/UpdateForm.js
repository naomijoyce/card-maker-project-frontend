import React, { Component } from 'react';
import { connect } from "react-redux";
import DropdownDate from 'react-dropdown-date';

class UpdateForm extends Component {
  state={
    first_name: "",
    last_name: "",
    email: "",
    birthday: ""
  }

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  dateChangeHandler = (date) => {
    console.log(date);
    this.setState({
      birthday: date
    })
  }

  render() {
    console.log(this.props.currentUser);
    
    return (
      <div className="update-form-container">
        <h3>Account Settings</h3>

        <form className="update-form">
          <label>First Name</label>
          <input 
            type="text" 
            name="first_name"
            value={this.state.first_name}
            onChange={this.changeHandler}/>

          <label>Last Name</label>
          <input 
            type="text"
            name="last_name"
            value={this.state.last_name}
            onChange={this.changeHandler}/>

          <label>Email</label>
          <input 
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.changeHandler}/>

          <label>Birthday</label>
          <DropdownDate 
            name="birthday"
            value={this.state.birthday}
            onDateChange={(date) => this.dateChangeHandler(date)}/>

          <button>Save</button>

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    currentUser: state.userInfo.currentUser.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateForm);