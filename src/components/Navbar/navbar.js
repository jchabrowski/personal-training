// import { Link } from "gatsby"
import React, { useState, useRef, useEffect } from "react"
import {Navbar, Nav } from 'react-bootstrap'
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
  )
}

export default SiteNavbar
