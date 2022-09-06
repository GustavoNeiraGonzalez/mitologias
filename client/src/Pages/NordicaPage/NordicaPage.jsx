import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../IndexPage/IndexPages.module.css';
import style2 from './NordicaPage.module.css'
import style3 from '../heightfull/height.module.css'

import axios from 'axios'

const NordicaPage = () =>{

    const [nordica, setNordica] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/api/mitologias/nordica')
        .then(allNordica =>setNordica(allNordica.data))
    }, [])
    

    return(
        <Container className={style.resize+' '+style3.heig}>
            <Row >
                <Col sm={1} xs={1}></Col>
                <Col sm={10} xs={10} className={style.color +' '+style.flexbox}>

                    <div >
                        {nordica.map(nordic => {
                            return(
                                <div key={nordic._id} className={style2.color +' '+style2.paddingpos}>
                                    <Link to={`/nordica/${nordic._id}`}>
                                    {nordic.Titulo}
                                    </Link>     
                                </div>
                            )
                        })}
                    </div>
                </Col>
                <Col sm={1} xs={1} className={style.fondo}></Col>
            </Row>

        </Container>

    )
}

export default NordicaPage;