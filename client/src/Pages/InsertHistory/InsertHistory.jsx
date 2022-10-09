import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom';
import style from '../UpdateHistory/UpdateHistory.module.css'
import {alerta,error} from '../Alertas/alertas'
export default function InsertHistory() {
  const navigate = useNavigate()

    const [Mito, setmito] = useState('');
    const [user,setUser] = useState('');
    const [config,setConfig] = useState('');
    const [Titulo, settitulo] = useState('');
    const [Dioses, setdioses] = useState('');
    const [Facciones, setfacciones] = useState('');
    const [Personajes_importantes, setpersonajes] = useState('');
    const [Lugares, setlugares] = useState('');
    const [Historia, sethistoria] = useState('');
    const [Fuentes, setfuentes] = useState('');

    const [totalMitos, settotalMitos] = useState([])
    useEffect(() => {
      
        axios.get('http://localhost:3001/api/difMitos')
        .then(allNordica =>settotalMitos(allNordica.data))
    }, [])

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

    const addToList = () => {
        if(Mito && Titulo && Historia!==""){
          try {
            axios.post('http://localhost:3001/insert', {
              Mito:Mito,
              Titulo:Titulo,
              Dioses:Dioses,
              Facciones:Facciones,
              Personajes_importantes:Personajes_importantes,
              Lugares:Lugares,
              Historia:Historia,
              Fuentes:Fuentes
            }, config)
            .then((response)=>(alerta("Agregado con exito"),navigate("/ModificarHistoria")))
            .catch(err =>{
              if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data.mensaje)
                error(err.response.data.mensaje)
                if(err.response.data.mensaje === "Token invalido"){
                  setUser('')
                  window.localStorage.removeItem('loggedd')
                  navigate("/ModificarHistoria")
                }
                

             }})  
          } catch (err) {
            error(err)
          }
        }else{
          error("obligatorio elegir/escribir un mito, historia y Titulo para añadir una mitologia")
      }
    }

    const mitosInput = useRef(null)

  return (
    <div>
      {
        user 
          ?
        <Form className={style.color}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Mito</Form.Label>
              <Form.Select onChange={(e)=>
              {
                if(e.target.value==="Elegir Mito"){
                  mitosInput.current.disabled=false;
                  setmito("")
                }else{
                  mitosInput.current.disabled=true
                  mitosInput.current.value="";
                  setmito(e.target.value)
                }}
                }>
                {totalMitos.map(total =>{
                  return(
                    <option key={total}>{total}</option>
                    )
                })}
                <option>Elegir Mito</option>
              </Form.Select >
              <Form.Control ref={mitosInput} type="text" placeholder="Escribir solo si creas una mitologia nueva"
              onChange={(e) => {
                  setmito(e.target.value);
              }}/>
          </Form.Group>
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
      : <Link to="/login">Logeate desgraciao</Link>
    }
    </div>
  )
}
