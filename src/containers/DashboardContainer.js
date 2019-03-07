import React, { Component } from 'react';
import UserDesigns from "../components/UserDesigns";
import UserInvites from "../components/UserInvites";
import { connect } from "react-redux";
import { getUserInfo } from "../thunks/userThunk";

class DashboardContainer extends Component {
  constructor(props){
    super(props)

    const token = localStorage.getItem("token")
    this.props.getUserInfo(this.props.currentUser.id, token)
    
  }
  render() {
    console.log(this.props);

    const userDesigns = this.props.currentUserInfo.designs.map(design => {
      return <UserDesigns key={design.id} design={design}/>
    })

    const userInvites = this.props.currentUserInfo.invites.map(invite =>{
      return <UserInvites key={invite.id} invite={invite}/>
    })
    
    
    return (
      <div className="dashboard-container">
      <h2>Welcome to your dashboard!</h2>

      <h3>My Designs</h3>
        <div className="dashboard-designs">
        {userDesigns}
        </div>
      

      <h3>My Invites</h3>
        <div className="dashboard-invites">
          {userInvites}
        </div>
      
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  
  return{
    currentUser: state.userInfo.currentUser.user,
    currentUserInfo: state.userInfo.currentUserInfo
  }
}

const mapDispatchtoProps = dispatch =>{
  return{
    getUserInfo: (id,token) => dispatch(getUserInfo(id, token))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(DashboardContainer);