import axiosInstance from "../../../helpers/axiosInstance";
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from "../../../constants/actionTypes";
export const login = ({ password, username }) => (dispatch) => {
  dispatch({ //initial dispatch
    type: LOGIN_LOADING,
  });

  axiosInstance()
    .post("/auth/login", { //posting to backend
      password,
      username,
    })
    .then((res) => {
      localStorage.token = res.data.token;
      dispatch({ //dispatch on success
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({ //dispatch on error
        type: LOGIN_ERROR,
        payload: err.response ? err.response.data : "COULD NOT CONNECT",
      });
    });
};
