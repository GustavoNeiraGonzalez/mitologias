import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../UpdateHistory/UpdateHistory.module.css'
import style2 from '../heightfull/height.module.css'
import { alerta,error } from '../Alertas/alertas';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate()

  const [user,setUser] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [config,setConfig] = useState('');
  
    const register =  async credentials =>{
      const {data} = await 
        axios.post("http://localhost:3001/register",
      credentials)
      return data
    }
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );
    const handleRegister = async(e)=>{
      e.preventDefault()
      try {
        await register({
          name,
          password
        })

        alerta("Creado con exito")
        await delay(1000);

        navigate("/");

        window.location.reload(false);


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
        <h1>Registro</h1>
        <Form.Label>Usuario</Form.Label>
        <Form.Control type="text"  placeholder="Nuevo nombre de usuario"
        onChange={(e) => {
          setName(e.target.value);
      }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" value={password} placeholder="Contraseña"
        onChange={(e) => {
            setPassword(e.target.value);
        }}/>
      </Form.Group>

      <button  type="button" onClick={handleRegister}>Crear usuario</button>
    </Form>
  )
}

export default Register