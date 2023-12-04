import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import LeftSideBar from './LeftSideBar';
import Home from './Home';
import About from './About';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
function TriangleNavbar() {

  return (
    <>
      <Router>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>
              <img alt="" src="/earthlogo.png" width="30" height="30" className="d-inline-block align-top" />
              {'  '} E.O. Hub
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Tools" id="basic-nav-dropdown">
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <div id="mode">{`${navigator.onLine ? "Online Mode" : "Offline Mode"}`}</div>
          </Container>
        </Navbar>
        <LeftSideBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </>
  );
}



export default TriangleNavbar