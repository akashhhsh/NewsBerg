import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from "./news-berg.png"
import india from './india-flag-round-circle-icon.png'
import uk from './uk-flag-round-circle-icon.png'
import us from './usa-flag-round-circle-icon.png'
import { Link } from "react-router-dom";
import { useState } from 'react';


function NavBar() {

    const [country, setCountry] = useState("🌏")

    const handledropdown = (event) => {
        setCountry(event)
    }


    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed-top">
            <Container>
                <Link className='navbar-brand' to="/">
                    <img
                        src={logo}
                        alt=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    News-Berg
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Top</Nav.Link>
                        <Nav.Link as={Link} to="/business">Business</Nav.Link>
                        <Nav.Link as={Link} to="/environment">Environment</Nav.Link>
                        <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
                        <Nav.Link as={Link} to="/food">Food</Nav.Link>
                        <Nav.Link as={Link} to="/health">Health</Nav.Link>
                        <Nav.Link as={Link} to="/politics">Politics</Nav.Link>
                        <Nav.Link as={Link} to="/science">Science</Nav.Link>
                        <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
                        <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
                        <Nav.Link as={Link} to="/tourism">Tourism</Nav.Link>
                        <Nav.Link as={Link} to="/world">World</Nav.Link>
                    </Nav>
                    <DropdownButton id="dropdown-basic-button" title={country} className='text-left mx-3' size="sm" onSelect={handledropdown}>
                        <Dropdown.Item eventKey={"us"}><img
                            src={india}
                            alt=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            India</Dropdown.Item>
                        <Dropdown.Item eventKey={"in"}><img
                            src={uk}
                            alt=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            United Kingdom</Dropdown.Item>
                        <Dropdown.Item eventKey={"uk"}><img
                            src={us}
                            alt=""
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                            United States</Dropdown.Item>
                    </DropdownButton>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">🔍</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>


        </Navbar>
    );
}

export default NavBar;