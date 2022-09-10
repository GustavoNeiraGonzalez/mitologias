import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { Link, useParams } from 'react-router-dom';
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

    const [user,setUser] = useState('');
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

    

    useEffect(() => {
      axios.get(`http://localhost:3001/api/history/${nordica_id}`)
      .then(Nordica => (setNordica(Nordica.data) ,settitulo(Nordica.data.Titulo)
      ,setdioses(Nordica.data.Dioses),
        setfacciones(Nordica.data.Facciones),
        setpersonajes(Nordica.data.Personajes_importantes),
        setlugares(Nordica.data.Lugares),
        sethistoria(Nordica.data.Historia),
        setfuentes(Nordica.data.Fuentes)))
      .catch(error => console.log(error))
      
    }, [])
  const UpdateList = (id) => {
    
    setdioses(Dioses.toString().split(','))
    setfacciones(Facciones.toString().split(','))
    setpersonajes(Personajes_importantes.toString().split(','))
    setlugares(Lugares.toString().split(','))
    
    axios.put('http://localhost:3001/update' , {
        id:id,
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
    
    const Delete = (id) =>{
        axios.delete(`http://localhost:3001/delete/${id}`,config)
    }

  return (
    <div>
      {
        user 
        ?
      <Form className={style.color}>
        <Form.Group className="mb-3" controlId="Titulo">
          <Form.Label>Titulo</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                settitulo(e.target.value);
            }}

          defaultValue={Titulo}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Dioses">
          <Form.Label>Dioses (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setdioses(e.target.value);
            }}

          defaultValue={Dioses}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Facciones">
          <Form.Label>Facciones (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setfacciones(e.target.value);
            }}

          defaultValue={Facciones}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Personajes_importantes">
          <Form.Label>Personajes_importantes (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setpersonajes(e.target.value);
            }}

          defaultValue={Personajes_importantes}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Lugares">
          <Form.Label>Lugares (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setlugares(e.target.value);
            }}

          defaultValue={Lugares}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Historia">
          <Form.Label>Historia</Form.Label>
          <Form.Control as="textarea" rows={6} onChange={(e) => {
                sethistoria(e.target.value);
            }}

          defaultValue={Historia}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Fuentes">
          <Form.Label>Fuentes</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setfuentes(e.target.value);
            }}

          defaultValue={Fuentes}
          />
        </Form.Group>
        <button  id='update' type="button" onClick={()=>{UpdateList(nordica._id)} }>ModifyHistory</button>
        <button type="button" onClick={()=>Delete(nordica._id)}>Delete history</button>

      </Form>
      : <Link to="/login">Logeate desgraciao</Link>
    }
    </div>
    )
}

export default UpdateHistory
