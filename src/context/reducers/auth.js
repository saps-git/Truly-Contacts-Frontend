import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from '../../constants/actionTypes'

const auth = (state, {type, payload}) => { //action = {type, payload}
    switch(type){
        case REGISTER_LOADING: //for both cases, return is the same
        case LOGIN_LOADING:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    loading: true,
                },
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    loading: false,
                    data: payload,
                },
            };
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                auth:{
                    ...state.auth,
                    loading: false,
                    error: payload,
                },
            };
        default:
            return state
    }
}

export default auth;