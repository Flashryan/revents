import {React, useState} from'react';
import { NavLink, useHistory } from 'react-router-dom';
import {Menu, Container, Button} from 'semantic-ui-react'
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';


export default function Navbar({setFormOpen}) {

    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignOut(){
        setAuthenticated(false);
        history.push('/')
    }

    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to={'/'} header>
                    ReEvents
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/sandbox'} header>
                    sandbox
                </Menu.Item>
                <Menu.Item as={NavLink} to={'/events'} header>
                    Events
                </Menu.Item>
                {authenticated &&
            <Menu.Item as={NavLink} to={'/createEvent'} >
                <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
            </Menu.Item>}
            {authenticated ? <SignedInMenu signOut={handleSignOut} /> : <SignedOutMenu setAuthenticated={setAuthenticated} />}
            </Container>
            
        </Menu>
    )
}