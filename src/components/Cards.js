import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { selectDesign } from "../actions/designAction";

class Cards extends Component {
  clickHandler = (event, design) => {
    this.props.selectDesign(design)
  }

  render() {    
    const design = this.props.design || {}
    
    return (
      <div className="card-designs">
        <Link 
          key={design.id} 
          id={design.id} 
          to={`/designs/${design.id}`}
          onClick={ (event) => this.clickHandler(event, design)}>
          
          <img src={design.image} alt="some random card design"/>

        </Link>

        <h4>{design.title}</h4>

      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return{
    selectDesign: (design) => dispatch(selectDesign(design))
    
  }
}

export default connect(null, mapDispatchtoProps)(Cards);