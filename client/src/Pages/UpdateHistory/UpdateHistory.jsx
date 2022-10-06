import React, { useEffect } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom';
import style from './UpdateHistory.module.css'
import {alerta,error} from '../Alertas/alertas'
const UpdateHistory = () => {
  const navigate = useNavigate()

    const [Mito, setmito] = useState("");
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
      .then(Nordica => (setNordica(Nordica.data),
        setmito(Nordica.data.mito),
        settitulo(Nordica.data.info.Titulo),
        setdioses(Nordica.data.info.Dioses),
        setfacciones(Nordica.data.info.Facciones),
        setpersonajes(Nordica.data.info.Personajes_importantes),
        setlugares(Nordica.data.info.Lugares),
        sethistoria(Nordica.data.info.Historia),
        setfuentes(Nordica.data.info.Fuentes)))
      .catch(error => console.log(error))
      
    }, [])
  const UpdateList = (id) => {
    
    setdioses(Dioses.toString().split(','))
    setfacciones(Facciones.toString().split(','))
    setpersonajes(Personajes_importantes.toString().split(','))
    setlugares(Lugares.toString().split(','))
    try {
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
    .then(alerta("Modificado con exito"))
    .catch((err) => error(err))
    } catch (err) {
      error(err)
    }
    
}
    
    const Delete = (id) =>{

        axios.delete(`http://localhost:3001/delete/${id}`,config)
        .then((alerta("Borrado con exito") 
        ,navigate("/ModificarHistoria"))
        .catch(err => error(err)))
    }

  return (
    <div>
      {
        user 
        ?
      <Form className={style.color}>
        <Form.Group className="mb-3" controlId="Titulo">
          <Form.Label>Mito</Form.Label>
          <Form.Control disabled type="text" defaultValue={Mito}
          />
        </Form.Group>

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
                setdioses(e.target.value.split(','));
            }}

          defaultValue={Dioses}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Facciones">
          <Form.Label>Facciones (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setfacciones((e.target.value.split(',')));
            }}

          defaultValue={Facciones}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Personajes_importantes">
          <Form.Label>Personajes_importantes (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setpersonajes(e.target.value.split(','));
            }}

          defaultValue={Personajes_importantes}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Lugares">
          <Form.Label>Lugares (array: poner todo junto separado por , )</Form.Label>
          <Form.Control type="text" onChange={(e) => {
                setlugares(e.target.value.split(','));
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
