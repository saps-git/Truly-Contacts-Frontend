import React from 'react'
import { Placeholder, List, Image, Container, Message, Header } from 'semantic-ui-react'
import AppHeader from '../../../components/header'
import ImageThumb from '../../../components/ImageThumb'
import Favorites from '../Favorites'

const ContactsListUI = ({state: {contacts: {loading, data, isSearchActive, foundContacts}}}) => {
    console.log("data", data)

    const currentContacts = isSearchActive ? foundContacts : data;
    console.log("currentContacts", currentContacts);

    return (
        <div>
        <AppHeader/>
        <Container>
            <Header>STARRED</Header>
                <Favorites
                    favorites = {currentContacts.filter((item) => item.is_favorite)}
                    loading = {loading}
                />

            <Header>ALL CONTACTS</Header>

            {loading && ( //dummy placeholder that will show up when page is loading
            <div>
                {" "}
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>
            </div>
            )}

            {!loading && currentContacts.length === 0 && (
                <Message content="No Contacts to show" />
            )}
            
            <List>
                {currentContacts.length > 0 && currentContacts.map((contact) => (
                <List.Item key={contact.id}>
                    <List.Content floated="right">
                        <span>{contact.phone_number}</span>
                    </List.Content>
                    <List.Content style={{display:"flex", alignItems:"center"}}>
                        <ImageThumb
                            circular 
                            firstName = {contact.first_name}
                            lastName = {contact.last_name}
                            src={contact.contact_picture}
                            style={{ width: 45, height: 45 }}
                        />

                        <span>
                            {contact.first_name} {contact.last_name}
                        </span>
                    </List.Content>
                </List.Item>
            ))} 
            </List>
        </Container>
        </div>
    )
}

export default ContactsListUI
