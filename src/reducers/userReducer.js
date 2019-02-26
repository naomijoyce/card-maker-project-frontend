const initialState = {
  currentUser: {},
  loggedIn: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "LOGIN_USER":
      return {}
    default:
      return state
  }
}

export default reducer;
