import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class CardInfo extends Component {
  
  render() {
    const {selectedDesign } = this.props
   
    return (
      <div>
        <img src={selectedDesign.image} alt="some random card design here" />
        <h3>{selectedDesign.title}</h3>
        <p>
          jigdjflkgajdl;
        </p>
        <button onClick={this.props.history.goBack}>Back</button>
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