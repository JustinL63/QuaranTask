import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

const NavBar = () => {
    return ( 
        <Navbar bg="light" expand="lg" fixed="top" >
            <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/tasks">Tasks</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/users">Users</Nav.Link>
            </Nav.Item>
        </Navbar>
     );
}
 
export default NavBar;