const initialState = {
  events: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_EVENTS":
      return{
        ...state,
        events: action.payload
      }

    default:
      return state
  }
}

export default reducer;