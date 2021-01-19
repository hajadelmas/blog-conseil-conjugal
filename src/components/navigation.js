import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'


import MamaLogo from '../images/mama_logo.png'

export default () => (
  // <nav role="navigation" className={styles.navigation_contain}>
  //   <img src={MamaLogo} style={{ width: '30%', marginTop:'30px' }} />
  //   <ul className={styles.navigation}>
  //     <li className={styles.navigationItem}>
  //       <Link to="/">Home</Link>
  //     </li>
  //     <li className={styles.navigationItem}>
  //       <Link to="/blog/">Blog</Link>
  //     </li>
  //   </ul>
  // </nav>

  <Navbar bg="white" expand="lg" className=''>
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
      </Nav>
    </Navbar.Collapse>
  </Navbar>

  
)
