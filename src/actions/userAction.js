export const loginUser = user => {
  return{
    type: "LOGIN_USER",
    payload: user
  }
}

export const createUser = newUser => {
  return{
    type: "CREATE_USER",
    payload: newUser
  }
}