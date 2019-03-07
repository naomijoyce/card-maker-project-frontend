import { loadDesigns, createDesign, getDesign } from "../actions/designAction";

export const getDesigns = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/designs")
  .then(response => response.json())
  .then(allDesigns => {
    return dispatch(loadDesigns(allDesigns))
  })
}

export const creatingNewDesign = (designInfo, token) => dispatch => {
  return fetch("http://localhost:3000/api/v1/designs", {
    method: "POST",
    headers: {
      'Content-Type': 'application/JSON',
      'Accept': 'application/JSON',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({design: designInfo})
  })
  .then(response => response.json())
  .then(design =>{
    dispatch(createDesign(design))
    
  })
}

export const getDesignInfo = (id) => dispatch => {
  return fetch(`http://localhost:3000/api/v1/designs/${id}`)
  .then(response => response.json())
  .then(design => {
    dispatch(getDesign(design))
  })
}