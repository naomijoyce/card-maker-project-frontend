import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomizeCard extends Component {
  constructor(props){
    super(props)
    
    this.state={
      name: "",
      host: "",
      date: "",
      time: "",
      phone_number: "",
      location: "",
      address: "",
      message: "",
      user_id: props.currentUser.id,
      design_id: props.selectedDesign.id,
      event_id: props.selectedDesign.event.category
    }
  }

  changeHandler = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
  }

  render() {
    console.log(this.state);
    
    console.log(this.props);
    
    return (
      <div className="customize-card-container">

        <div className="customize-card-form">
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

            <label>Message</label>
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
  console.log(state.userInfo);
  
  return{
    selectedDesign: state.designInfo.selectedDesign,
    currentUser: state.userInfo.currentUser.user
  }
}

const mapDispatchToProps = dispatch => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeCard);