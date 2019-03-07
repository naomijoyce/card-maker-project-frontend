export const createInvite = (inviteInfo, token) => dispatch => {
  return fetch('http://localhost:3000/api/v1/invites', {
    method: "POST",
    headers: {
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      invite: inviteInfo
    })
  })
  .then(response => response.json())
  .then(invite => {
    console.log(invite);
    
  })
}