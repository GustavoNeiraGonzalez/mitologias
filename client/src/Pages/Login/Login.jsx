import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import style from '../UpdateHistory/UpdateHistory.module.css'
import style2 from '../heightfull/height.module.css'

const Login = () => {
  const [user,setUser] = useState('');
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [config,setConfig] = useState('');
  useEffect(()=>{
    const loggedUserJson = window.localStorage.getItem('loggedd')
    if (loggedUserJson){
      const user = (JSON.parse(loggedUserJson)).usuario
      setUser(user)
      const configg =  {
        headers:{
            token:`bearer ${user.token}`
        }
      }
      setConfig(configg)
    }
  },[])
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


      } catch (error) {
        console.log(error)
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