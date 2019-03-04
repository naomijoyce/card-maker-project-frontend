const initialState = {
  currentUser: {},
  loggedIn: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){

    case "CREATE_USER":
      return{
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }

    case "LOGIN_USER":
      return {
        ...state, 
        currentUser: action.payload,
        loggedIn: true
      }

    case "LOGOUT_USER":
      localStorage.clear()
      return{
        ...state,
        loggedIn: false
      }
    
    case "UPDATE_USER":
      return{
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }

    default:
      return state
  }
}

export default reducer;
