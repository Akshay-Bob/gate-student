import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import app from '../firebase'
import firebase from './firebase.config';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function ContactForm() {

  const [state, setState] = useState({
    name: '',
    email: '',
    number: '',
    branch: '',
    year: '',
    otp: ''
  });

  let name, value;
  const userData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setState({ ...state, [name]: value });
  }

  // configureCaptcha
  const configureCaptcha = (number) => {
    //const auth = getAuth(firebase);
    const auth = getAuth(firebase);

    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();

        console.log(number, 'recaptha verified');
      }
    });
  }



  // onSignInSubmit
  const onSignInSubmit = (event) => {
    event.preventDefault();

    const phoneNumber = "+91" + state.number;
    console.log(phoneNumber);
    
    configureCaptcha(phoneNumber);

    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();

    signInWithPhoneNumber(auth, phoneNumber, appVerifier).then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        //console.log('OTP has been send');
        alert('OTP has been send');
        //console.log(confirmationResult);
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        alert('OTP has been not send');
        // ...
      });
  }


  const verifyOtp = (event) => {
    event.preventDefault();

    const code = state.otp;
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      //const user = result.user;
      postData();
     
      alert('user is verified');
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert('user is not verified');
    });
  };




  const postData = async () => {
    //  event.preventDefault();

    const { name, email, number, branch, year, otp } = state;

    if (name && email && number && branch && year) {
      if (number.length === 10 && /^\d+$/.test(number)) {

        const request = await fetch(
          "https://gate-students-1b507-default-rtdb.firebaseio.com/gateStudentData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": 'application/json',
            },
            body: JSON.stringify({
              name,
              email,
              number,
              branch,
              year,
              otp
            })

          }
        );

        if (request) {
          setState({
            name: '',
            email: '',
            number: '',
            branch: '',
            year: '',
            otp: ''
          });


          alert("Data stored successfully");
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



  const getOtp = () => {
    const otpInput = document.getElementById('otpInput');
    otpInput.style.display = 'block';

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.style.display = 'block';

    const otpBtn = document.getElementById('otpBtn');
    otpBtn.style.display = 'none';
  }
  return (
    <>
      <Form method='POST' onSubmit={onSignInSubmit}>
        <div className='row'>
          <Form.Group className="col-md-6 mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter the name" name="name" value={state.name} onChange={userData} required />
          </Form.Group>

          <Form.Group className="col-md-6 mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter the email" name="email" value={state.email} onChange={userData} required />
          </Form.Group>

          <Form.Group className="col-md-6 mb-3">
            <Form.Label>Branch</Form.Label>
            <Form.Control type="text" placeholder="Enter the branch" name="branch" value={state.branch} onChange={userData} required />
          </Form.Group>

          <Form.Group className="col-md-6 mb-3">
            <Form.Label>GATE Year</Form.Label>
            <Form.Control type="number" placeholder="Enter the GATE Year" name="year" value={state.year} onChange={userData} maxLength={4} required />
          </Form.Group>

          <Form.Group className="col-md-6 mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter the contact number" name="number" value={state.number} onChange={userData} required />

            <Button variant="primary" type="submit" onClick={getOtp} className='mt-3 btn-sm' id='otpBtn' style={{ display: 'block' }} >Get Mobile OTP</Button>
          </Form.Group>



          <Form.Group className="col-md-6 mb-3" style={{ display: 'none' }} id="otpInput" >
            <Form.Label>OTP</Form.Label>
            <Form.Control type="number" placeholder="Enter the otp" name="otp" onChange={userData} value={state.otp} />
          </Form.Group>

          <div id='sign-in-button'></div>
          <div className='col-md-6'>
            <Button variant="primary" type="submit" onClick={verifyOtp} className='btn-sm' id="submitBtn" style={{ display: 'none' }} >Submit</Button>
          </div>

        </div>
      </Form>
    </>



  )
}
