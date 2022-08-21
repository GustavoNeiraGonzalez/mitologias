import React from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"

export default function InsertHistory() {

    const [Titulo, settitulo] = useState('');
    const [Dioses, setdioses] = useState('');
    const [Facciones, setfacciones] = useState('');
    const [Personajes_importantes, setpersonajes] = useState('');
    const [Lugares, setlugares] = useState('');
    const [Historia, sethistoria] = useState('');
    const [Fuentes, setfuentes] = useState('');


    const addToList = () => {
        axios.post('http://localhost:3001/insert', {
            Titulo:Titulo,
            Dioses:Dioses,
            Facciones:Facciones,
            Personajes_importantes:Personajes_importantes,
            Lugares:Lugares,
            Historia:Historia,
            Fuentes:Fuentes
        })
        .catch(err =>console.log(err))
    }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" 
        onChange={(e) => {
            settitulo(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dioses</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" 
        onChange={(e) => {
            setdioses(e.target.value);
        }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Facciones</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" 
        onChange={(e) => {
            setfacciones(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Personajes_importantes</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" 
        onChange={(e) => {
            setpersonajes(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lugares</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" 
        onChange={(e) => {
            setlugares(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Historia</Form.Label>
        <Form.Control as="textarea" rows={3} 
        onChange={(e) => {
            sethistoria(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fuentes</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" 
        onChange={(e) => {
            setfuentes(e.target.value);
        }}/>
      </Form.Group>
      <button type="button" onClick={addToList}>add user</button>

    </Form>

  )
}
