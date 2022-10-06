import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios'
export  function Header() {
    const [user,setUser] = useState('');
    const [totalMitos, settotalMitos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/difMitos')
        .then(allNordica =>settotalMitos(allNordica.data))
    }, [])
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
                <Navbar.Brand as={NavbarBrand   } to="/">Mitos :D</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    {totalMitos.map(total => {
                            return(
                                <Nav.Link   key={total} as={Link} to={`/${total}`}>
                                -{total}
                                </Nav.Link>
                            )
                        })}
                    {
                        user 
                        ? <Nav.Link as={NavLink} to={`/ModificarHistoria`}>Modificar historias</Nav.Link> 
                        : <div/>
                    }
                     {
                        user 
                        ? <Nav.Link as={NavLink} to={`/agregarHistoria`}>agregar Historia</Nav.Link> 
                        : <div/>
                    }
                    <Nav.Link as={NavLink} to="/">home</Nav.Link>
                    
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

  )
}
