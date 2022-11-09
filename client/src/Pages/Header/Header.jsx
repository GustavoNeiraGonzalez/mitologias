import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


export  function Header() {
    const navigate = useNavigate()
    const [user,setUser] = useState('');
    const [config,setConfig] = useState('');
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
          try {
            const configg =  {
              headers:{
                  token:`bearer ${user.token}`
              }
            }
            setConfig(configg)
          } catch (error) {
            window.localStorage.removeItem('loggedd')
            navigate("/");
          }
        }
      },[])
      
      useEffect(() => {
        axios.post('http://localhost:3001/verifyToken',{},config)
        .catch(err =>{
            if (err.response) {
              if(err.response.data.mensaje === "Token invalido"){
                setUser('')
                setConfig('')
                window.localStorage.removeItem('loggedd')
              }else if(err.response.data.mensaje ==="Debes enviar un token"){
                console.log("error esperado")
              }
           }})  
    }, [config])
    
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
