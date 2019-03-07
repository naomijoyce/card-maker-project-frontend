const initialState = {
  designs: [],
  selectedDesign: {},
  selectedTool: "pencil",
  selectedColor: "",
  selectedDesignInfo: {}
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
    
    case "SELECT_TOOL":
      return{
        ...state,
        selectedTool: action.payload
      }
    
    case "SELECT_COLOR":
      return{
        ...state,
        selectedColor: action.payload
      }

    case "CREATE_DESIGN":
      return{
        ...state,
        designs: [...state.designs, action.payload]
      }

    case "GET_DESIGN":
      return{
        ...state,
        selectedDesignInfo: action.payload
      }
      
    default:
      return state
  }
}

export default reducer;