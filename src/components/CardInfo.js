import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CardInfo extends Component {
  
  render() {
    const { selectedDesign } = this.props
   
    return (
      <div className="card-info">
        <h2>{selectedDesign.title} Design Details</h2>

        <img name="info-img" src={selectedDesign.image} alt="some random card design here" />

        <div className="design-info">
          <h3>Design Title: {selectedDesign.title}</h3>
        <p>
          Type of Event: {Object.values(selectedDesign.event.category)} <br/>
          <i>Design by: {Object.values(selectedDesign.user.first_name)} {Object.values(selectedDesign.user.last_name)} </i>
        </p>
        </div>


        <div className="buttons">
{
          localStorage.getItem("token") !== null ? 
          <Link to="/customize">
        <button>Customize Invitation Card</button>
        </Link> : null
        }
        
        
        
        <button onClick={this.props.history.goBack}>Back to All Designs</button>

        </div>
        
        
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