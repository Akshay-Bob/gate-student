import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import banner from '../Images/banner.jpg';

export default function Banner() {


  return (
    <>
      <Container fluid>
        <Row>
          <Col className='px-0'>
            <Image src={banner} className='img-fluid' style={{ 'filter': 'brightness(0.2)' }} />

            <h1 className='position-absolute  top-0 mt-5 fs-1 text-white ps-5 ms-5 w-50 fw-bold lh-base'>Unlock your potential. <br />Ace the GATE 2025 with Vidyalankar
              Infinite.</h1>
            <h3 className='position-absolute top-0 ps-5 ms-5 text-white w-75' style={{ marginTop: 240 }}>Prepare for GATE the Infinite way &amp; get the AIR you deserve. With our expert guidance and proven teaching methodology, you can achieve remarkable results & open doors to unlimited opportunities.</h3>

          </Col>
        </Row>
      </Container>

    </>
  )
}
