import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Cat } from "react-kawaii";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        
        <Link to="/designs">
          <button className="browse">Browse Designs</button>
        </Link>


        {
          localStorage.getItem("token") !== null && this.props.loggedIn ?
          <Link to="/designeditor">
            <button className="design">Create Design</button>
          </Link>:null
        }
        

        {
          localStorage.getItem("token") !== null && this.props.loggedIn ? 
          <Link to="/dashboard">
            <button>View Dashboard</button>
          </Link>
          :
          <Link to="/loginorsignup">
            <button>Sign Up or Log In!</button>
          </Link>
        }

        <div className="homehome">
      
          <h1>Design Your Own Invitation Card</h1>
          <Cat size={500} mood="excited" color="#E8AA99" />
          
        </div>

        
        
        
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    loggedIn: state.userInfo.loggedIn
  }
}

export default connect(mapStateToProps)(HomePage);