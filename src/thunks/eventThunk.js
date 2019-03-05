import { loadEvents } from "../actions/eventAction";

export const getEvents = () => dispatch => {
  return fetch("http://localhost:3000/api/v1/events")
  .then(response => response.json())
  .then(allEvents => {
    return dispatch(loadEvents(allEvents))
  })
}