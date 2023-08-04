import React from 'react'
import data from './ProgramData'
import { Container, Row, Card, Image } from 'react-bootstrap'

function cardList(val) {

  //const {title, cardImage, description} = 
  return (
    <Card className='col-md-4 border-0 py-3'>
      <Card.Body className='text-center border border-1 rounded-4 p-4'>
        <Card.Title className='fs-4'>{val.title}</Card.Title>
        <Image src={val.cardImage} />
        <Card.Text className='fs-6 pt-2'>{val.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default function ProgramDetails() {
  return (
    <Container className='py-5'>
      <Row>
        <h2>Program details</h2>
      </Row>
      <Row>
        {data.map(cardList)}
      </Row>
    </Container>
  )
}
