import { ADD_CONTACT_ERROR, ADD_CONTACT_LOAD, ADD_CONTACT_SUCCESS, CLEAR_ADD_CONTACT, CONTACTS_LOADING, CONTACTS_LOAD_ERROR, CONTACTS_LOAD_SUCCESS, LOGOUT_USER } from "../../constants/actionTypes";
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

        case ADD_CONTACT_LOAD: {
            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    error: null,
                    loading: true,
                }
            }
        }

        case ADD_CONTACT_SUCCESS: {
            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    loading: false,
                    data: payload,
                },

                contacts: {
                    ...state.contacts,
                    loading: false,
                    data: [payload, ...state.contacts.data]
                }
            }
        }

        case ADD_CONTACT_ERROR: {
            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    loading: false,
                }
            }
        }

        case CLEAR_ADD_CONTACT:{
            return{
                ...state,
                addContact:{
                    ...state.addContact,
                    error: null,
                    loading: false,
                    data: null,
                }
            }
        }

        default:
            return state
    }
}

export default contacts;