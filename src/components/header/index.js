//making the header which will be added on top of the page

import React, { useContext } from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import { Link, useHistory, useLocation } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import logout from "../../context/actions/auth/logout";

const Header = () => {
    const { pathname } = useLocation();
    const history = useHistory();

    const { contactsDispatch: dispatch} = useContext(GlobalContext);

    const handleUserLogout = () => {
      logout(history)(dispatch)
    };
    
  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        Truly Contacts
      </Menu.Item>
      {pathname === "/" && (<Menu.Item position="right">{/* position="right" will push item(and all the following items) to right side */}
        <Button as={Link} to="/contacts/create" inverted color="violet">{/*as={Link} is a semantic tag used make any word a link */}
          <Icon name="add"></Icon>
          Create Contact
        </Button>
      </Menu.Item>)}
      {pathname === "/" && (<Menu.Item>
        {" "}
        <Button onClick={handleUserLogout} inverted color="red">
          <Icon name="sign-out"></Icon>
          Logout
        </Button>
      </Menu.Item>)}
    </Menu>
  );
}
export default Header;
