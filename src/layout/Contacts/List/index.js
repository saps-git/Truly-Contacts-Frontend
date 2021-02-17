import React from 'react'
import { Placeholder, List, Image, Container, Message, Header } from 'semantic-ui-react'
import AppHeader from '../../../components/header'
import ImageThumb from '../../../components/ImageThumb'
import Favorites from '../Favorites'

const ContactsListUI = ({state: {contacts: {loading, error, data}}}) => {
    console.log("data", data)
    return (
        <div>
        <AppHeader/>
        <Container>
            <Header>STARRED</Header>
                <Favorites
                    favorites = {data.filter((item) => item.is_favorite)}
                    loading = {loading}
                />


            <Header>ALL</Header>

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

            {!loading && data.length === 0 && (
                <Message content="No Contacts to show" />
            )}
            
            <List>
                {data.length > 0 && data.map((contact) => (
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
