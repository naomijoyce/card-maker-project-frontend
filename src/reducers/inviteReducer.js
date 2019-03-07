const initialState = {
  userInvites: []
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "NEW_INVITE":
      return{
        ...state,
        userInvites: [...state.userInvites, action.payload]
      }

    default:
      return state
  }
}

export default reducer;