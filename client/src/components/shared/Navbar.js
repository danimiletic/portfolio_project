import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

const MainNavbar = ({}) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Home
          </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/about">
                About
              </Nav.Link>
              <Nav.Link href="/skills">
                Skills
              </Nav.Link>
              <Nav.Link href="/contacts">
                Contacts
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar;