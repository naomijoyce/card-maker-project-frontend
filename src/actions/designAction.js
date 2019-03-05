export const loadDesigns = design => {
  return{
    type: "LOAD_DESIGNS",
    payload: design
  }
}

export const selectDesign = design => {
  return{
    type: "SELECT_DESIGN",
    payload: design
  }
}

export const selectTool = tool => {
  return{
    type: "SELECT_TOOL",
    payload: tool
  }
}

export const selectColor = color => {
  return{
    type: "SELECT_COLOR",
    payload: color
  }
}

export const createDesign = newDesign => {
  return{
    type: "CREATE_DESIGN",
    payload: newDesign
  }
}