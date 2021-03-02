import React from 'react'
import { Link } from 'gatsby'
// import styles from './navigation.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'


import MamaLogo from '../images/mama_logo.png'

export default () => (
  <>
    <Navbar bg="white" expand="lg" className='justify-content-between'>
      <Navbar.Brand href="/" className=''>
        <img
            alt=""
            src={MamaLogo}
            width="50%"
            height="30%"
            className="m-2"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Item>
          <Link to="/" className='nav-link'>Accueil</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/blog/" className='nav-link'>Blog</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about/" className='nav-link'>A propos</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/contact/" className='nav-link'>Contact</Link>
        </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <span></span>
  </>

  

  
)
