import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './IndexPages.module.css'
import style2 from '../heightfull/height.module.css'
import axios from 'axios'

export  function IndexPages() {
  
  const [totalMitos, settotalMitos] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3001/api/difMitos')
      .then(allNordica =>settotalMitos(allNordica.data))
      console.log(totalMitos)
  }, [])
  return (
    <Container className={style.resize+' '+style2.heig}>
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
                {totalMitos.map(total => {
                            return(
                                <div key={total._id} className={'fw-normal lh-base fs-4 '+style.width+' '+style.spaceheight+' '+style.color}>
                                    <Link to={`/nordica/${total}`}>
                                    {total}
                                    </Link>     
                                </div>
                            )
                        })}
        </Col>
        <Col sm={1} xs={1} className={style.fondo}></Col>
      </Row>
    </Container>

  )
}
