import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { useParams } from 'react-router-dom';
import style from './UpdateHistory.module.css'
const UpdateHistory = () => {
    const [Titulo, settitulo] = useState("");
    const [Dioses, setdioses] = useState("");
    const [Facciones, setfacciones] = useState("");
    const [Personajes_importantes, setpersonajes] = useState("");
    const [Lugares, setlugares] = useState("");
    const [Historia, sethistoria] = useState("");
    const [Fuentes, setfuentes] = useState("");

    const {nordica_id} = useParams();
    const [nordica, setNordica] = useState({})

    useEffect(() => {
      axios.get(`http://localhost:3001/api/history/${nordica_id}`)
      .then(nordica => setNordica(nordica.data))
      .catch(error => console.log(error))
  }, [])

  const UpdateList = (id) => {
    axios.put('http://localhost:3001/update', {
        id:id,
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
    <Form className={style.color}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Titulo}
        onChange={(e) => {
            settitulo(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Dioses (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Dioses} 
        onChange={(e) => {
            setdioses(e.target.value.split(','));
        }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Facciones (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Facciones} 
        onChange={(e) => {
            setfacciones(e.target.value.split(','));
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Personajes_importantes (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Personajes_importantes} 
        onChange={(e) => {
            setpersonajes(e.target.value.split(','));
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Lugares (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Lugares} 
        onChange={(e) => {
            setlugares(e.target.value.split(','));
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Historia</Form.Label>
        <Form.Control as="textarea" rows={6} defaultValue={nordica.Historia}
        onChange={(e) => {
            sethistoria(e.target.value);
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Fuentes</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Fuentes} 
        onChange={(e) => {
            setfuentes(e.target.value);
        }}/>
      </Form.Group>
      <button type="button" onClick={()=>UpdateList(nordica._id)}>ModifyHistory</button>
      <button type="button">Delete history</button>
    </Form>
    )
}

export default UpdateHistory
