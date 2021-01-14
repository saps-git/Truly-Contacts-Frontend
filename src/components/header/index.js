//making the header which will be added on top of the page

import React from 'react'
import { Menu, Image, Button, Icon } from 'semantic-ui-react'
import logo from "../../assets/images/logo.svg"
import {Link} from 'react-router-dom'


function Header() {
    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item as={ Link } to="/" style={{ fontSize:24 }}>Truly Contacts</Menu.Item>
            <Menu.Item position="right">
                <Button as={ Link } to="/contacts/create" inverted color="violet"> {/*as={Link} is a semantic tag used make any word a link */}
                    <Icon name="add"></Icon>
                    Create Contact
                </Button>
            </Menu.Item>
            <Menu.Item>
                <Button inverted color="red">
                    <Icon name="sign-out"></Icon>
                    Logout
                </Button>
            </Menu.Item>
        </Menu>
    )
}
export default Header

