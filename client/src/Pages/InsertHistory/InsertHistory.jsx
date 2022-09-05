import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"

export default function InsertHistory() {


    const [user,setUser] = useState('');
    const [config,setConfig] = useState('');
    const [Titulo, settitulo] = useState('');
    const [Dioses, setdioses] = useState('');
    const [Facciones, setfacciones] = useState('');
    const [Personajes_importantes, setpersonajes] = useState('');
    const [Lugares, setlugares] = useState('');
    const [Historia, sethistoria] = useState('');
    const [Fuentes, setfuentes] = useState('');


    useEffect(()=>{
      const loggedUserJson = window.localStorage.getItem('loggedd')
      if (loggedUserJson){
        const user = (JSON.parse(loggedUserJson)).usuario
        setUser(user)
        console.log(user)
        const configg =  {
          headers:{
              token:`bearer ${user.token}`
          }
        }
        setConfig(configg)
        console.log(configg)
      }
    },[])

    const addToList = () => {
        axios.post('http://localhost:3001/insert', {
            Titulo:Titulo,
            Dioses:Dioses,
            Facciones:Facciones,
            Personajes_importantes:Personajes_importantes,
            Lugares:Lugares,
            Historia:Historia,
            Fuentes:Fuentes
        }, config)
        .catch(err =>console.log(err))
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="ej: El diluvio" 
        onChange={(e) => {
            settitulo(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dioses(array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" placeholder="ej: asd,caca,pipi" 
        onChange={(e) => {
            setdioses(e.target.value.split(','));
        }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Facciones(array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" placeholder="ej: asd,caca,pipi" 
        onChange={(e) => {
            setfacciones(e.target.value.split(','));
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Personajes_importantes(array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" placeholder="ej: asd,caca,pipi" 
        onChange={(e) => {
            setpersonajes(e.target.value.split(','));
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lugares(array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" placeholder="ej: asd,caca,pipi" 
        onChange={(e) => {
            setlugares(e.target.value.split(','));
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Historia</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="En una tierra muy lejana..."
        onChange={(e) => {
            sethistoria(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fuentes</Form.Label>
        <Form.Control type="text" placeholder="mitologias.com" 
        onChange={(e) => {
            setfuentes(e.target.value);
        }}/>
      </Form.Group>
      <button type="button" onClick={addToList}>add user</button>

    </Form>

  )
}
