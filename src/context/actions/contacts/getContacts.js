import { CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInstance";
import { CONNECTION_ERROR } from "../../../constants/api";

export default (history) => (dispatch) => {
    dispatch({
        type: CONTACTS_LOADING,
    })
    axiosInstance(history)
    .get("/contacts/") //fetching details from contacts, 
    .then((res) => {
        dispatch({ //and then calling dispath accordingly
            type: CONTACTS_LOAD_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err) => {
        dispatch({
            type: CONTACTS_LOAD_ERROR,
            payload: err.response ? err.response.data : CONNECTION_ERROR 
        })
    });
}