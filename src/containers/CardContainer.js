import React, { Component } from 'react';
import Cards from "../components/Cards";
import { connect } from "react-redux";
import { getDesigns } from '../thunks/designThunk';

class CardContainer extends Component {
  constructor(props){
    super(props);

    this.props.getDesigns();
  }

  render() {
    const cardDesigns = this.props.designs.map(design => {
      return <Cards key={design.id} design={design}/>
    })

    return (
      <div className="cards-container">
        {cardDesigns}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    designs: state.designInfo.designs
  }
}

const mapDispatchToProps = dispatch => {
  return{
    getDesigns: () => dispatch(getDesigns())
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);