import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar = ({loggedIn}) => {  
  return (
    <div className="nav-bar">
      <ul>
        <Link to="/"><li>Home</li></Link>

        {
          loggedIn ? 
          (
            <div>
              <Link to="/designeditor"><li>Create a Design</li></Link>
              <Link to="/mydesigns"><li>My Designs</li></Link> 
              <Link to="/myinvites"><li>My Invites</li></Link>
              <Link to="/account"><li>Account Settings</li></Link>
            </div>
          ):
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

export default connect(mapStateToProps)(NavBar);