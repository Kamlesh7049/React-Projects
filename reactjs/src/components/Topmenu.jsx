import Container from "react-bootstrap/Container";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topmenu = () => {
  return (
    <>
      
        <Container>
      <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
      </Navbar>
        </Container>
     
       
      
    </>
  );
};
export default Topmenu;
