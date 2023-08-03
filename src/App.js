import React from 'react'
import Banner from './Components/Banner'
import ProgramDetails from './Components/ProgramDetails'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './Components/ContactForm'
import ContactContent from './Components/ContactContent';
import PopupCopm from './Components/PopupCopm'

export default function App() {
  return (
    <div>
      <Banner />
      <ProgramDetails />
      <PopupCopm/>

      <Container fluid  className='bg-light py-5'>
        <Container>
          <Row>
            <Col><ContactContent/></Col>
            <Col><ContactForm /></Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}
