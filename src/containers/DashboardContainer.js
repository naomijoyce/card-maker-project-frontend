import React, { Component } from 'react';
import UserDesigns from "../components/UserDesigns";
import UserInvites from "../components/UserInvites";
import { connect } from "react-redux";

class DashboardContainer extends Component {
  render() {
    console.log(this.props.designs);

    const userDesigns = this.props.designs.map(design => {
      return <UserDesigns key={design.id} design={design}/>
    })

    const userInvites = this.props.invites.map(invite =>{
      return <UserInvites key={invite.id} invite={invite}/>
    })
    
    
    return (
      <div className="dashboard-container">
      <h2>Welcome to your dashboard {this.props.currentUser.first_name}!</h2>

      <h3>My Designs</h3>
      {userDesigns}

      <h3>My Invites</h3>
      {userInvites}
      </div>
    );
  }
}

const mapStateToProps = state => {  
  return{
    currentUser: state.userInfo.currentUser.user,
    designs: state.userInfo.currentUser.user.designs,
    invites: state.userInfo.currentUser.user.invites
  }
}

export default connect(mapStateToProps)(DashboardContainer);