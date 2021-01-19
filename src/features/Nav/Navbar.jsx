import React from'react';
import {Menu, Container, Button} from 'semantic-ui-react'


export default function Navbar({setFormOpen}) {
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    ReEvents
                </Menu.Item>
            <Menu.Item>
                <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
            </Menu.Item>
            <Menu.Item>
                
                <Button positive inverted content='Login' />
                <Button positive inverted content='Register' style={{marginLeft: 10}} />
            </Menu.Item>
            </Container>
            
        </Menu>
    )
}