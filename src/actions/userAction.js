export const createUser = newUser => {
  return{
    type: "CREATE_USER",
    payload: newUser
  }
}

export const loginUser = user => {
  return{
    type: "LOGIN_USER",
    payload: user
  }
}

export const logoutUser = user => {
  return{
    type: "LOGOUT_USER",
    payload: user
  }
}

export const updateUser = user => {
  return{
    type: "UPDATE_USER",
    payload: user
  }
}


