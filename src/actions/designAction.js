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