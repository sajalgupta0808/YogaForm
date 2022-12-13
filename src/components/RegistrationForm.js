import React from 'react'
import './style.css'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import {useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';



export default function RegistrationForm() {

    const [Toastshow, setToastShow] = useState(false);
    const [name, setName] = useState(false);
    const [age, setAge] = useState(false);
    const [password, setPassword] = useState(false);
    const [email, setEmail] = useState(false);
    const [date, setDate] = useState(false);

    const toastClose = () => setToastShow(false);
    const toastShow = () => setToastShow(true);

    const register = () => {
        console.log(`name: ${name},email: ${email}, password:${password},age: ${age}`);
        let resp;

        axios.post('https://yogaformbackend-production.up.railway.app/api/register', {
            name : name,
            email: email,
            age : age,
            password : password
          })
          .then(function (response) {
            resp = response;
          })
          .catch(function (error) {
            console.log(error);
          });

          console.log(`response for register is ${resp}`);


    }

  return (
    <>
    <div className="form">
          <div className="form-body">
            <div><b><center><h4>Registration Form</h4></center></b></div>
            <div class="form-group">
                    <label className="form_label" for="name">Name</label>
                    <input onChange={e => 
                        {
                            setName(e.target.value);
                        }
                    } type="text" class="form-control" id="name" name="name" placeholder="Enter Your Name" required autofocus/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
            </div>   
            <div class="form-group">
                    <label className="form_label" for="email">Email</label>
                    <input onChange={e => 
                        {
                            setEmail(e.target.value);
                        }
                    } type="email" class="form-control" id="email" name="email" placeholder="Enter Your Email Address" required autofocus/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
            </div>   
            <div class="form-group">    
                    <label className="form_label" for="age">Age</label>
                    <input onChange={e => 
                        {
                            setAge(e.target.value);
                        }
                    } type="number" class="form-control" onchange="validateAge(this.value)" id="age" name="age" placeholder="Enter Your Age" required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            
            <div class="form-group">    
                    <label className="form_label" for="password">Password</label>
                    <input onChange={e => 
                        {
                            setPassword(e.target.value);
                        }
                    } type="password" class="form-control" id="password" name="password" placeholder="Enter Your Password" required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-group">    
                    <label className="form_label" for="confirmpassword">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmpassword" name="confirmpassword" placeholder="Re-enter Your Password" required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
            </div>

            

          <div class="footer">
              <Button variant="primary" className='signinbtn' onClick={register}><Link to ="/" className='signinbtn' style={{color:"white"}}>Register</Link></Button>
              <Button variant="danger" className='signinbtn' onClick ={toastShow}><Link to ="/" className='signinbtn' style={{color:"white"}}>Sign In</Link></Button>
              
          </div>
      </div>      
    </div>

    <Row>
      <Col xs={6}>
        <Toast onClose={toastClose} show={Toastshow} delay={2000} autohide>
          <Toast.Header className="rounded me-2" alt=""/>
          <Toast.Body>You have registered successfully. Login to continue.</Toast.Body>
        </Toast>
      </Col>
    </Row>

    </>
  )
}