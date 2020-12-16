import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarHome = () => {
  return (
    // <Navbar  expand="sm" color="light" light fixed="top"  className="shadow-lg p-3 mb-5 bg-white rounded">
    //   <Container>
    //     <Navbar.Brand as={NavLink} to="/">
    //       Thong Blog's
    //     </Navbar.Brand>
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="ml-auto">
    //         <Nav.Link as={NavLink} to="/" exact>
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={NavLink} to="/register">
    //           Register
    //         </Nav.Link>
    //         <Nav.Link as={NavLink} to="/login">
    //           Login
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <>
 <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="/">
          Thong's Blog
        </a>
       
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </>

   
  );
};

export default NavbarHome;
