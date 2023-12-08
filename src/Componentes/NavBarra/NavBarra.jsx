import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBarra.css';
import { Link, NavLink } from 'react-router-dom';

const NavBarra = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary fw-bold text-uppercase fs-5">
                <Container>
                    <Navbar.Brand as={Link} href="#home" to="/">
                        <img
                            alt="logo en blanco y negro de la marca"
                            src="/logo.png"
                            width="auto"
                            height="80"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} href="#home" className='navBarraLink navBarraItem' to="/">Home</Nav.Link>
                            <Nav.Link as={NavLink} href="#2D" className='navBarraItem' to="categoria/2" >2D</Nav.Link>
                            <Nav.Link as={NavLink} href="#3D" className='navBarraItem' to="categoria/3">3D</Nav.Link>
                            <Nav.Link as={NavLink} href="#Contacto" className='navBarraItem' to="/">Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </header>

    );
}

export default NavBarra