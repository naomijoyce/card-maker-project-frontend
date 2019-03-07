import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { bubble as Menu } from "react-burger-menu";
import { logoutUser } from "../actions/userAction";

class NavBar extends Component{    
  render(){
  return (
    <div className="nav-bar">
      <Menu>
     
        <NavLink className="bm-item-list" to="/"><a href="/">Home</a></NavLink>

        {
          localStorage.getItem("token") !== null && this.props.loggedIn? 
          (
            <React.Fragment>
              <NavLink className="bm-item-list" to="/designeditor">
                <a href="/designeditor">Create a Design</a> 
              </NavLink><br/>

              <NavLink className="bm-item-list" to="/dashboard">
                <a href="dashboard">Dashboard</a>
              </NavLink> <br/>

              <NavLink className="bm-item-list" to="/account">
                <a href="account">Account Settings</a>
              </NavLink><br/>

              <NavLink 
                className="bm-item-list"
                to="/" 
                onClick={() => this.props.logoutUser()}>
                <a href="/logginout">Log Out</a>
              </NavLink> <br/>
            </React.Fragment>
          ) :
          <NavLink className="bm-item-list" to="/loginorsignup">
            <a href="/loginout">Log In/Sign Up</a>
          </NavLink>
        }
     
      </Menu>
    </div>
  );
  };
}

const mapStateToProps = (state) => {
  return{
    loggedIn: state.userInfo.loggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);