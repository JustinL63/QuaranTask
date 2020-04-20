import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './NavBar.scss'


const NavBar = () => {
    return ( 
        <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">QuaranTask</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/taskcreator">Task Creator</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
        </Nav>
      </Navbar>
     );
}
 
export default NavBar;