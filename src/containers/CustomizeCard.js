import React, { Component } from 'react';
import { connect } from 'react-redux';

class CustomizeCard extends Component {
  render() {
    return (
      <div>
        edit that invite!
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{

  }
}

const mapDispatchToProps = dispatch => {
  return{
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomizeCard);