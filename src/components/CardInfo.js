import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CardInfo extends Component {
  
  render() {
    const { selectedDesign } = this.props
   
    return (
      <div>
        <img src={selectedDesign.image} alt="some random card design here" />
        <h3>{selectedDesign.title}</h3>
        <p>
          Type of Event: {Object.values(selectedDesign.event)} <br/>
          <i>Design by: {Object.values(selectedDesign.user.first_name)} {Object.values(selectedDesign.user.last_name)} </i>
        </p>

        {
          localStorage.getItem("token") !== null ? 
          <Link to="/customize">
        <button>Customize Card</button>
        </Link> : null
        }
        
        
        
        <button onClick={this.props.history.goBack}>Back to All Designs</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    selectedDesign: state.designInfo.selectedDesign
  }
}

export default withRouter(connect(mapStateToProps)(CardInfo));