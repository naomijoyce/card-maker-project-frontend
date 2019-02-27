const initialState = {
  designs: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DESIGNS":
      return{
        ...state, 
        designs: action.payload
      }
  
    default:
      return state
  }
}

export default reducer;