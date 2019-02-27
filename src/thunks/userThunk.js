import { loginUser } from "../actions/userAction";

export const loggingInUser = loginCredentials => dispatch => {
  return fetch("http://localhost:3000/api/v1/login", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON'
    },
    body: JSON.stringify({user: loginCredentials})
  })
  .then(response => {
    if(response.status === 401){
      return response.json().then(error =>{throw error})
    }else{
      return response.json()
    }

  })
  .then(data => {  
    dispatch(loginUser(data))
  })
}