import React from 'react';

const UserDesigns = ({design}) => {
  console.log(design);
  
  return (
    <div className="user-design-container">
      <img name="info-img" src={design.image} alt="random user design"/>
      <h4>{design.title}</h4>
    </div>
  );
};

export default UserDesigns;