import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_LEADS, DELETE_LEADS, ADD_LEAD } from "./types";
import { tokenConfig } from "./auth";
//GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) =>  dispatch(returnErrors
        (err.response.data, err.response.status)));
};

//DELETE LEADS
export const deleteLeads = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ deleteLead: " Lead Deleted" }));
      dispatch({
        type: DELETE_LEADS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

//ADD LEADS
export const addLead = (lead) => (dispatch, getState) => {
  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then((res) => {
        dispatch(createMessage({ addLead: " Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data,
      });
    })
    .catch((err) => dispatch(returnErrors
        (err.response.data, err.response)));
};
