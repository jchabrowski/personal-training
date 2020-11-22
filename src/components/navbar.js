// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Navbar, Nav } from 'react-bootstrap'
import '../styles/all.css'

const SiteNavbar = ({siteTitle}) => (
  <>
  <Navbar expand="md" bg="light" variant="light" sticky="top">
    <Navbar.Brand href="#home" className="navBrand px-1">JC</Navbar.Brand>
    <Nav className="mx-auto navInfo">
      <Nav.Link href="#home" className="navLink">O mnie</Nav.Link>
      <Nav.Link href="#features" className="navLink">Trening</Nav.Link>
      <Nav.Link href="#pricing" className="navLink">Kontakt</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link>PL</Nav.Link>
      <Nav.Link>EN</Nav.Link>
    </Nav>
  </Navbar>
</>
)

SiteNavbar.propTypes = {
  siteTitle: PropTypes.string,
}

SiteNavbar.defaultProps = {
  siteTitle: ``,
}


export default SiteNavbar
