import { Link } from "gatsby";
import React, { useState, useRef, useEffect } from "react";
import {Navbar, Nav } from 'react-bootstrap';
import '../../styles/all.css'

const SiteNavbar = () => {
  const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
      const handleScroll = () => {
        const show = window.scrollY > 50
        if (navRef.current !== show) {
          setNavBackground(show)
        }
      }
      document.addEventListener('scroll', handleScroll)
      return () => {
        document.removeEventListener('scroll', handleScroll)
      }
    }, [])
  return (
    <Navbar expand="md" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'white' : 'transparent'}}>
      <Link to="/" className="navLink px-1">JC</Link>
      <Nav className="mx-auto navInfo">
        <Link to="/about/" className="navLink">O mnie</Link>
        <Link to="/training/" className="navLink">Trening</Link>
        <a href="#contact" className="navLink">Kontakt</a>
      </Nav>
      <Nav>
        <Nav.Link>PL</Nav.Link>
        <Nav.Link>EN</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default SiteNavbar
