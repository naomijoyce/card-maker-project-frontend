import React, { Component } from 'react';
import UpdateForm from "../components/UpdateForm";
import { connect } from "react-redux";

class UserAccount extends Component {
  
  render() {
    const currentUser = this.props.currentUser || {}
    
    return (
      <div>
        <h2>Hello, {currentUser.first_name}!</h2>
        <UpdateForm />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    currentUser: state.userInfo.currentUser.user
  }
}

export default connect(mapStateToProps)(UserAccount);