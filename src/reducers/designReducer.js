const initialState = {
  designs: [],
  selectedDesign: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_DESIGNS":
      return{
        ...state, 
        designs: action.payload
      }

    case "SELECT_DESIGN":
      return{
        ...state,
        selectedDesign: action.payload
      }
  
    default:
      return state
  }
}

export default reducer;