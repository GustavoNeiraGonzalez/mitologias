import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios'
import style from './DeleteHistory.module.css'
import style2 from '../NordicaPage/NordicaPage.module.css'
import style3 from '../heightfull/height.module.css'
                  
const DeleteHistory = () => {
  const [totalMitos, settotalMitos] = useState([])
  useEffect(() => {
      axios.get('http://localhost:3001/api/difMitos')
      .then(allNordica =>settotalMitos(allNordica.data))
  }, [])

  const [nordica, setNordica] = useState([])
  {
    useEffect(() => {
      axios.get(`http://localhost:3001/api/mitos`)
      .then(allNordica =>setNordica(allNordica.data))
  }, [])
}
  return (
    <Container className={style.color+' '+style.resize+' '+style3.heig}>
    <Row >
      {totalMitos.map(total => {
                      return(
                        <Col key={total} sm={4} xs={4}>
                            <h1>{total}</h1>
                          <div  className={style2.color +' '+style2.paddingpos}>
                              
                              {nordica.filter(allhistory => allhistory.mito===total)
                              .map(nordic => {
                                  return(
                                      <div key={nordic._id} className={style2.color +' '+style2.paddingpos}>
                                          <Link to={`/${total}/${nordic._id}/update`}>
                                          {nordic.info.Titulo}
                                          asd
                                          </Link> 
                                      </div>
                                  )
                              })}

                              
                          </div>
                        </Col>
                      )
                  })}



    </Row>
  </Container>
  )
}
export default DeleteHistory;