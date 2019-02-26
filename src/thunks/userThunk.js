import { loginUser } from "../actions/userAction";

export const loggingInUser = loginCredentials => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON',
      'Authorization': localStorage.getItem("token")
    },
    body: JSON.stringify({user: loginCredentials})
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    dispatch(loginUser(data))
  })
}