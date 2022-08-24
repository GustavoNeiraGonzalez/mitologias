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
    settitulo(document.getElementById('Titulo').value)
    setdioses(document.getElementById('Dioses').value.split(','))
    setfacciones(document.getElementById('Facciones').value.split(','))
    setpersonajes(document.getElementById('Personajes_importantes').value.split(','))
    setlugares(document.getElementById('Lugares').value.split(','))
    sethistoria(document.getElementById('Historia').value)
    setfuentes(document.getElementById('Fuentes').value)

    axios.put('http://localhost:3001/update' , {
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
    
    const Delete = (id) =>{
        axios.delete(`http://localhost:3001/delete/${id}`)
    }

  return (
    <Form className={style.color}>
      <Form.Group className="mb-3" controlId="Titulo">
        <Form.Label>Titulo</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Titulo}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Dioses">
        <Form.Label>Dioses (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Dioses} 
        
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Facciones">
        <Form.Label>Facciones (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Facciones} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Personajes_importantes">
        <Form.Label>Personajes_importantes (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Personajes_importantes} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Lugares">
        <Form.Label>Lugares (array: poner todo junto separado por , )</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Lugares} 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Historia">
        <Form.Label>Historia</Form.Label>
        <Form.Control as="textarea" rows={6} defaultValue={nordica.Historia}
      />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Fuentes">
        <Form.Label>Fuentes</Form.Label>
        <Form.Control type="text" defaultValue={nordica.Fuentes} 
       />
      </Form.Group>
      <button  id='update' type="button" onClick={()=>{UpdateList(nordica._id)} }>ModifyHistory</button>
      <button type="button" onClick={()=>Delete(nordica._id)}>Delete history</button>
    </Form>
    )
}

export default UpdateHistory
