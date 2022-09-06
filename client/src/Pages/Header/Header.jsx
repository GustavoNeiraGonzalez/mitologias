import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
export  function Header() {
    const [user,setUser] = useState('');

    useEffect(()=>{
      const loggedUserJson = window.localStorage.getItem('loggedd')
      if (loggedUserJson){
        const user = (JSON.parse(loggedUserJson)).usuario
        setUser(user)        
      }
    },[])
  return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavbarBrand   } to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/nordica">Nordica</Nav.Link>
                    {
                        user 
                        ? <Nav.Link as={NavLink} to={`/borrarHistoria`}>Modificar historias</Nav.Link>
                        : <div/>
                    }
                    <Nav.Link as={NavLink} to="/">home</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

  )
}
