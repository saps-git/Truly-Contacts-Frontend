import React from 'react'
import { Placeholder, List, Image, Container, Message } from 'semantic-ui-react'
import Header from '../../../components/header'
import ImageThumb from '../../../components/ImageThumb'

const ContactsListUI = ({state: {contacts: {loading, error, data}}}) => {
    console.log("data", data)
    return (
        <div>
        <Header/>
        <Container>
            {loading && (
            <>
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
            </>
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
