import React from 'react';

const UserInvites = ({invite}) => {
  console.log(invite);
  
  
  return (
    <div className="user-invites">
      <img name="info-img"src={invite.design.image} alt="invites design"/>
    </div>
  );
};

export default UserInvites;