import { loginUser, createUser } from "../actions/userAction";

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
  .then(user => {  
    localStorage.setItem("token", user.jwt)
    dispatch(loginUser(user))
  })
}

export const creatingNewUser = userInfo => dispatch => {
  return fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON'
    },
    body: JSON.stringify({user: userInfo})
  })
  .then(response => response.json())
  .then(user => {
    console.log(user);
    localStorage.setItem("token", user.jwt)
    dispatch(createUser(user))
  })

}