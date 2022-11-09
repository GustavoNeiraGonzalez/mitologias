import React from 'react'
import {useState} from 'react'
import { error } from '../Alertas/alertas';


const Logout = () => {
  const [user, setUser] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [config, setConfig] = useState('');
  window.localStorage.removeItem('loggedd')
  error("¡Cerraste sesión!")
  window.location.href = '/';
  return (
    <h1>¡Has salido de la sesión!</h1>
  )
}

export default Logout
