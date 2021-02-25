import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import getContacts from '../../context/actions/contacts/getContacts'
import { GlobalContext } from '../../context/Provider'
import  ContactsListUI  from '../../layout/Contacts/List'
import deleteContact from '../../context/actions/contacts/deleteContact'
import starUnstar from '../../context/actions/contacts/starUnstar'

const ContactsContainer = () => {
    const {contactsState, contactsDispatch} = useContext(GlobalContext);
    const { contacts: {data}} = contactsState;

    const history = useHistory();

    const handleDeleteContact = (id) => {
        deleteContact(id)(contactsDispatch);
    };

    const handleStarUnstarContact = (id, is_favorite) => {
        starUnstar(id, !is_favorite)(contactsDispatch); // (!is_favorite) is passed so as to switch the case, when the button is pressed
    };

    useEffect(() => {
        if(data.length === 0){
            getContacts(history)(contactsDispatch);
        }
    }, []); //loading contacts only on the initial render

    return (
        <ContactsListUI 
            state={contactsState} 
            deleteContact={handleDeleteContact} 
            starUnstarContact={handleStarUnstarContact}
        />
    )
}

export default ContactsContainer; 
