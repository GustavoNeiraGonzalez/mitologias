import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../UpdateHistory/UpdateHistory.module.css'

const Login = () => {
    const [user,setUser] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const login =  async credentials =>{
      const {data} = await axios.post("http://localhost:3001/login",
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
        console.log(user)
        setUser(user)
        setName('')
        setPassword('')


      } catch (error) {
        console.log(error)
      }
      

    }

  return (
    <Form className={style.color}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Nombre"
        onChange={(e) => {
          setName(e.target.value);
      }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>password</Form.Label>
        <Form.Control type="password" placeholder="password"
        onChange={(e) => {
            setPassword(e.target.value);
        }}/>
      </Form.Group>

      <button  type="button" onClick={handleLogin}>Login ;D</button>
    </Form>
  )
}

export default Login