import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [nombre,setNombre] = useState('');
    const [password,setPassword] = useState('');
    const login =  ()  =>{
        axios.post('http://localhost:3001/insert', {
            nombre:nombre,
            password:password
        })
        .catch(err =>console.log(err))
    }

  return (
    <div>Login</div>
  )
}

export default Login