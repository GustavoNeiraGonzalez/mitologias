import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './IndexPages.module.css'
export  function IndexPages() {
  return (
    <Container className={style.resize}>
      <Row >
        <Col sm={1} xs={1}></Col>
        <Col sm={10} xs={10} className={style.color +' '+style.flexbox}>
            <div className={'fw-semibold lh-base fs-4 '+style.width+' '+style.spaceheight}>
                Bienvenido! 
                <br />
                Disfruta de la
                Pagina dedicada a las mitologias, visita la distintas historias 
                del mundo.
                <br />
                Como la creación del mundo, del ser humano, la explicación de eventos naturales por distintas civilizaciones (excepto la cristiana)
                <br />
            </div>
            <div className={'fw-lighter lh-base fs-4 '+style.width+' '+style.spaceheight}>
                 (si notan alguna incongruencia o fallo en historias o demás,
                 mandar un correo (indicado al final de la pagina))
                 <br />
                 se aceptan donaciones, no sean cerdos ;)
            </div>
            <div className={'fst-italic lh-base fs-4 '+style.width+' '+style.spaceheight}>
                Mitologias planeadas en implementar: Griega, egipcia
            </div>
            <div className={'fw-normal lh-base fs-4 '+style.width+' '+style.spaceheight}>
                Mitologias en Construcción: <Link to="/nordica">Nordica</Link></div>
        </Col>
        <Col sm={1} xs={1} className={style.fondo}></Col>
      </Row>
    </Container>

  )
}
