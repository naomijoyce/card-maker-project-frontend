import React from 'react';
import CardsInfo from "./CardInfo";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { design } = props
  
  return (
    <div>
      <Link key={design.id} to={`/designs/${design.id}`}>
        <img src={design.image} alt="some card design here"/>
      </Link>
      
      <h4>{design.title}</h4>
    </div>
  );
};

export default Cards;