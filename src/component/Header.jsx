import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(188, 225, 255)" }}
        className="container-fluid headerBg"
      >
        <div className="row">
          <div className="col-12 mx-auto">
            <Navbar expand="sm">
              <Container>
                <Navbar.Brand className="headerBrand" href="/">
                  RAFAY KHAN
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls="basic-navbar-nav"
                  className="bg-dark"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link>
                      <NavLink className="headerLinks" exect to="/">
                        Home
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink className="headerLinks" exect to="/service">
                        Service
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink className="headerLinks" exect to="/about">
                        About
                      </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                      <NavLink className="headerLinks" exect to="/contact">
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

export default Header;
