import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/designeditor"><li>Create a Design</li></Link>
        <Link to="/mydesigns"><li>My Designs</li></Link> 
        <Link to="/myinvites"><li>My Invites</li></Link>
        <Link to="/account"><li>Account Settings</li></Link>
        <Link to="/loginorsignup"><li>Log In/Sign Up</li></Link>
      </ul>
    </div>
  );
};

export default NavBar;