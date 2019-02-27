import { loadDesigns } from "../actions/designAction";

export const getDesigns = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/designs")
  .then(response => response.json())
  .then(allDesigns => {
    return dispatch(loadDesigns(allDesigns))
  })
}