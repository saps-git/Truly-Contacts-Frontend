import { LOGOUT_USER } from "../../../constants/actionTypes"

export default (history) => (dispatch) => {
    localStorage.removeItem("token"); //removing the token from localStorage
    dispatch({
        type: LOGOUT_USER,
    });
    history.push("/auth/login"); //going back to the login screen
};
