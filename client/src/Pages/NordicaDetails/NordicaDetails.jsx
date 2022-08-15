import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../IndexPage/IndexPages.module.css'
import style2 from './NordicaDetails.module.css'

const NordicaDetails = () => {

    const {nordica_id} = useParams();
    const [nordica, setNordica] = useState({})
    const loadNordicaDetails = () =>{
        fetch(`http://localhost:3001/api/history/${nordica_id}`)
        .then(response => response.json())
        .then(nordica => setNordica(nordica))
    }

    loadNordicaDetails()

    return (
        <Container className={style.resize}>
        <Row >
          <Col sm={1} xs={1}></Col>
          <Col sm={10} xs={10} className={style.color +' '+style.flexbox}>
              <div className={'fw-semibold lh-base fs-4 '+style.width+' '+style.spaceheight}>
                    {nordica.Titulo}        
              </div>
              <div className={'fst-italic lh-base fs-5 text-break text-wrap'+style.width+' '+style.spaceheight+' '+style2.saltolinea}>
              {nordica.Historia}</div>
          </Col>
          <Col sm={1} xs={1} className={style.fondo}></Col>
        </Row>
      </Container>
    )
}
export default NordicaDetails;