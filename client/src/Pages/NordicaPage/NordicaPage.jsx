import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../IndexPage/IndexPages.module.css';
import style2 from './NordicaPage.module.css'
import style3 from '../heightfull/height.module.css'

import axios from 'axios'

const NordicaPage = () =>{
    const {TituloMito} = useParams();

    const [mito, setMito] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/api/mitologias/${TituloMito}`)
        .then(allNordica =>setMito(allNordica.data))
    }, [])
    

    return(
        <Container className={style.resize+' '+style3.heig}>
            <Row >
                <Col sm={1} xs={1}></Col>
                <Col sm={10} xs={10} className={style.color +' '+style.flexbox}>

                    <div >
                        
                        {mito.map(mit => {
                            console.log(mit._id)
                            return(
                                <div key={mit._id} className={style2.color +' '+style2.paddingpos}>
                                    <Link to={`/${TituloMito}/${mit._id}`}>
                                    {mit.info.Titulo}
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