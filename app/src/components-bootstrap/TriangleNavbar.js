import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Spatial from './Spatial';
import Ahp from './Ahp';
import Home from './Home';
import About from './About';
import MyMap from '../map-comp/MyMap'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import { Stack } from 'react-bootstrap';
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
                <Nav.Link as={Link} to="/map">Map</Nav.Link>
                <NavDropdown.Divider />
                <Nav.Link as={Link} to="/ahp">AHP</Nav.Link>
                <Nav.Link as={Link} to="/spatial">Spatial Search</Nav.Link>
              </NavDropdown>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
            </Nav>
            <div id="mode">{`${navigator.onLine ? "Online Mode" : "Offline Mode"}`}</div>
          </Container>
        </Navbar>
        <Stack direction="horizontal" gap={3}>
          <div >
            <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/ahp" element={<Ahp />}></Route>
              <Route path="/spatial" element={<Spatial />}></Route>
              <Route path="/map" element={<MyMap />}></Route>
            </Routes>
          </div>
        </Stack>
      </Router>
    </>
  );
}



export default TriangleNavbar