import React from 'react'
import { useState } from 'react'

const Login = () => {

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const login =  ()  =>{
        axios.post('http://localhost:3001/insert', {
            name:name,
            password:password
        })
        .catch(err =>console.log(err))
    }

  return (
    <div>Login</div>
  )
}

export default Login