import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import { connect } from 'react-redux';
import { createInvite } from "../thunks/inviteThunk";

class CustomizeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      host: "",
      date: new Date(),
      time: new Date(),
      phone_number: "",
      location: "",
      address: "",
      message: "",
      user_id: this.props.currentUser.id,
      design_id: this.props.selectedDesign.id,
      event_id: this.props.selectedDesign.event.id
    }
  }


  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  dateChangeHandler = (date) => {
    this.setState({date})
  }

  timeChangeHandler = (time) => {
    this.setState({time})
  }

  submitHandler = (event) => {
    event.preventDefault()
    const token = localStorage.getItem("token")

    this.props.createInvite(this.state, token)
  }

  render() {
    console.log(this.state);
  
    return (
      <div className="customize-card-container">

        <div className="customize-card-form">
          <img src={this.props.selectedDesign.image} alt="some design"/>
          <form className="invite-form" onSubmit={this.submitHandler}>
            <label>Name of the Event</label>
            <input 
              type="text" 
              name="name" 
              value={this.state.name}
              onChange={this.changeHandler}/>

            <label>Your Host</label>
            <input 
              type="text" 
              name="host" 
              value={this.state.host}
              onChange={this.changeHandler}/>
            
            <label>Date of the Event</label>
           <DatePicker 
            name="date"
            value={this.state.date}
            minDate={new Date()}
            clearIcon= {null}
            onChange={this.dateChangeHandler}/> <br/>

           <label>Time of the Event</label>
           <TimePicker 
            name="time"
            value={this.state.time}
            clearIcon= {null}
            onChange={this.timeChangeHandler}/> <br/>
        

            <label>Phone Number</label>
            <input 
              type="text" 
              name="phone_number" 
              value={this.state.phone_number}
              onChange={this.changeHandler}/>

            <label>Name of the Venue or Location</label>
            <input 
              type="text" 
              name="location" 
              value={this.state.location}
              onChange={this.changeHandler}/>

            <label>Address</label>
            <input 
              type="text" 
              name="address" 
              value={this.state.address}
              onChange={this.changeHandler}/>

            <label>Message</label> <br/>
            <textarea
              name="message" 
              value={this.state.message}
              onChange={this.changeHandler}/>

            <button>Create Invite</button>
          </form>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    selectedDesign: state.designInfo.selectedDesign,
    currentUser: state.userInfo.currentUser.user
  }
}

const mapDispatchToProps = dispatch => {
  return{
    createInvite: (inviteInfo, token) => dispatch(createInvite(inviteInfo, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeCard);