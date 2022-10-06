import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../UpdateHistory/UpdateHistory.module.css'
import style2 from '../heightfull/height.module.css'
import { alerta,error } from '../Alertas/alertas';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()

  const [user,setUser] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [config,setConfig] = useState('');
  
    const login =  async credentials =>{
      const {data} = await 
        axios.post("http://localhost:3001/login",
      credentials)
      return data
    }

    const handleLogin = async(e)=>{
      e.preventDefault()
      try {
        const user = await login({
          name,
          password
        })
        window.localStorage.setItem(
          'loggedd', JSON.stringify(user)
        )
        var tok = `bearer ${user.usuario.token}`
        const configg =  {
          headers:{
              token:tok
          }
        }
        setConfig(configg)
        console.log(user.usuario.token)
        console.log(configg)
        setUser(user)
        setName('')
        setPassword('')

        alerta("Logeado con exito")
        navigate("/")
      } catch (err) {
        if(err.message ==="Cannot read properties of undefined (reading 'token')"){
          error("Error: usuario y/o contraseña incorrectas")
        }else{
          error(err)
        }
      }
      

    }

  return (
    <Form className={style2.heig+' '+style.color}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  placeholder="Nombre"
        onChange={(e) => {
          setName(e.target.value);
      }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" value={password} placeholder="password"
        onChange={(e) => {
            setPassword(e.target.value);
        }}/>
      </Form.Group>

      <button  type="button" onClick={handleLogin}>Login ;D</button>
    </Form>
  )
}

export default Login