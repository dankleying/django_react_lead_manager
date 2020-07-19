// http requests
import axios from "axios";
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`) // trailing slash is needed
    .then(res => {
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addLead = lead => dispatch => {
  axios
    .post("/api/leads/", lead) // pass the lead parameter here
    .then(res => {
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};