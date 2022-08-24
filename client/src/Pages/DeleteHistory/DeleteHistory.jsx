import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios'
import style from './DeleteHistory.module.css'
import style2 from '../NordicaPage/NordicaPage.module.css'
const DeleteHistory = () => {
    const [nordica, setNordica] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/mitologias/nordica')
        .then(allNordica =>setNordica(allNordica.data))
    }, [])
  return (
    <Container className={style.color+' '+style.resize}>
    <Row >
      <Col>
      <h1>Nordica </h1>
      {nordica.map(nordic => {
                            return(
                                <div key={nordic._id} className={style2.color +' '+style2.paddingpos}>
                                    <Link to={`/nordica/${nordic._id}/update`}>
                                    {nordic.Titulo}
                                    </Link> 
                                </div>
                            )
                        })}
      </Col>
      <Col>2 of 3</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
  )
}
export default DeleteHistory;