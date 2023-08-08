import React from 'react'
import Banner from './Components/Banner'
import ProgramDetails from './Components/ProgramDetails'
import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from './Components/ContactForm'
import ContactContent from './Components/ContactContent';
import PopupCopm from './Components/PopupCopm'
import Slider from './Components/Slider'
import Netflix from './Components/Netflix'

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
      <Container>
        <Row>
          <Col>
            <Slider/>
            {/* <Netflix/> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
