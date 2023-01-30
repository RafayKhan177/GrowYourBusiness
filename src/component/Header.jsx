import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="container-fluid header">
        <div className="row">
          <div className="col-12 mx-auto">
            <Navbar expand="sm">
              <Container>
                <NavLink to="/">
                  <Navbar.Brand className="headerBrand">
                    RAFAY KHAN
                  </Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                  ⨇
                </Navbar.Toggle>
                <Navbar.Collapse
                  className="justify-content-end"
                  id="basic-navbar-nav"
                >
                  <Nav className="">
                    <Nav.Link>
                      <NavLink
                        className="headerLinks"
                        exect
                        to="/"
                      >
                        Home
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink
                        className="headerLinks"
                        exect
                        to="/service"
                      >
                        Service
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink
                        className="headerLinks"
                        exect
                        to="/about"
                      >
                        About
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink
                        className="headerLinks"
                        exect
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
}
