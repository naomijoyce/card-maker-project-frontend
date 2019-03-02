import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/userAction";

const NavBar = ({loggedIn, logoutUser}) => {    
  return (
    <div className="nav-bar">
      <ul>
        <Link to="/"><li>Home</li></Link>

        {
          localStorage.getItem("token") !== null && loggedIn? 
          (
            <div>
              <Link to="/designeditor"><li>Create a Design</li></Link>
              <Link to="/mydesigns"><li>My Designs</li></Link> 
              <Link to="/myinvites"><li>My Invites</li></Link>
              <Link to="/account"><li>Account Settings</li></Link>
              <Link 
                to="/" 
                onClick={() => logoutUser()}>
                <li>Log Out</li>
              </Link>
            </div>
          ) :
          <Link to="/loginorsignup"><li>Log In/Sign Up</li></Link>
        }
        
      </ul>
    </div>
  );
};

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