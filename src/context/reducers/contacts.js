import { CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes";
import contactsInitialState from  "../initialstates/contactsInitialState"

const contacts = (state, {type, payload}) => {
    switch (type) {
        case CONTACTS_LOADING: {
            return{
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: true,
                },
            };
        }

        case CONTACTS_LOAD_SUCCESS: {
            return{
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: payload,
                },
            };
        }

        case CONTACTS_LOAD_ERROR: {
            return{
                ...state,
                contacts: {
                    ...state.contacts,
                    loading: false,
                    error: payload,
                },
            };
        }

        case LOGOUT_USER: {
            return{
                ...state,
                contactsInitialState,
            };
        }

        default:
            return state
    }
}

export default contacts;