import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from './Footer.module.css'
export function Footer() {
  return (
        <Container className={style.color+' '+style.resize+' text-center align-middle'}>
            <Row bg="dark">
                <Col>asd</Col>
                <Col >
                    <div className='fw-semibold text-break'>contacto: gustavoEduardoNeiraGonzalez@gmail.com</div>
                    zapato producciones all rights reserved</Col>
                <Col>asd</Col>
            </Row>
            
        </Container>
  )
}
