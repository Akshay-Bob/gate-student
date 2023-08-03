import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import operator from '../Images/operator.png'

export default function PopupCopm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [state, setState] = useState({
    fname: '',
    femail: '',
    fnumber: '',
    fprogram: '',
  });

  let name, value;
  const enquiryData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setState({ ...state, [name]: value });
  }





  const onEnquieyInSubmit = async (event) => {
     event.preventDefault();

    const { fname, femail, fnumber, fprogram } = state;

    if (fname && femail && fnumber && fprogram ) {
      if (fnumber.length === 10 && /^\d+$/.test(fnumber)) {
        
        const request = await fetch(
          "https://gate-students-1b507-default-rtdb.firebaseio.com/gateStudentEnquiryData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": 'application/json',
            },
            body: JSON.stringify({
              fname,
              femail,
              fnumber,
              fprogram
            })

          }
        );

        if (request) {
          setState({
            fname: '',
            femail: '',
            fnumber: '',
            fprogram: ''
          });


          alert("Thank You");
        }
        else {
          alert("Error storing data. Please try again.");
        }
      }
      else {
        alert("Please enter a valid 10-digit mobile number.");
      }
    } else {
      alert("Please filled data.");
    }
  };



  return (
    <>
      <Container className="py-4" style={{ background: '#fff3e7' }} fluid>
        <Container>
          <Row>
            <Col xs={1}>
              <img src={operator} alt='operator' className='img-fluid' />
            </Col>
            <Col xs={9} className='ps-4'><p><strong>Are  you aspiring to crack the GATE exam in 2025? For Electrical Engineering or Mechanical Engineering </strong></p>
              <p>GATE infinite brings you a program that offers Flexibility, quality teaching & access to top-notch resources.</p>
            </Col>
            <Col xs={2}><Button variant="outline-warning" onClick={handleShow}>Talk to counsellor</Button></Col>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Enquiry Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form method='POST' onSubmit={onEnquieyInSubmit}>
                  <div className='row'>
                    <Form.Group className="col-md-6 mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter the name"
                        name="fname"
                        value={state.fname}
                        onChange={enquiryData} 
                      />
                    </Form.Group>

                    <Form.Group className="col-md-6 mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter the Email Address"
                        name="femail"
                        value={state.femail}
                        onChange={enquiryData} 
                      />
                    </Form.Group>

                    <Form.Group className="col-md-6 mb-3">
                      <Form.Label>Phone number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Enter the Phone number"
                        name="fnumber"
                        value={state.fnumber}
                        onChange={enquiryData} 
                      />
                    </Form.Group>

                    <Form.Group className="col-md-6 mb-3">
                      <Form.Label>Programs</Form.Label>
                      <Form.Control
                        className='ms-3'
                        name="fprogram"
                        placeholder="Enter the Program Name"
                        value={state.fprogram}
                        onChange={enquiryData} 
                        type='text'

                      />
                    </Form.Group>

                    
                  </div>
                  <Button variant="primary" type="submit" className='btn-sm'  >Submit</Button>


                </Form>
              </Modal.Body>
            </Modal>
          </Row>


        </Container>
      </Container>
    </>
  )
}
