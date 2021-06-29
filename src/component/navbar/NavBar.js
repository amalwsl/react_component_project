import React from 'react';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" style={{width :"100%" ,marginBottom:"1rem"}}>
    <Navbar.Brand href="#home">Profile</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">About Me</Nav.Link>
      <Nav.Link href="#pricing">Resume</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
}

export default NavBar;