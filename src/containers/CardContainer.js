import React, { Component } from 'react';
import Cards from "../components/Cards";

class CardContainer extends Component {
  render() {
    return (
      <div className="cards-container">
        all the cards! including yours!
        <Cards />
      </div>
    );
  }
}

export default CardContainer;