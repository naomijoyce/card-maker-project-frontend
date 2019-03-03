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

  componentDidUpdate(prevState, prevProps) {
    
  }

  componentDidMount(){

    this.setState({
      first_name: this.props.currentUser.first_name,
      last_name: this.props.currentUser.last_name,
      email: this.props.currentUser.email,
      birthday: this.props.currentUser.birthday
    })
    
  }

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  dateChangeHandler = (date) => {
    console.log(date);
  
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  render() {
    const formatDate = (date) => {	// formats a JS date to 'yyyy-mm-dd'
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
    
    return (
      <div className="update-form-container">
        <h3>Account Settings</h3>

        <form className="update-form" onSubmit={this.submitHandler}>
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
            selectedDate={this.state.birthday}
            onDateChange={(date) => this.dateChangeHandler(formatDate(date))}/>

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