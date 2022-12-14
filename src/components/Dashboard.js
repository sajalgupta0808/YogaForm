import React, { useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ls from 'local-storage'
import axios from 'axios';
import { getDefaultNormalizer } from '@testing-library/react';



export default function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () =>{
        setShow(false);}
    const handleShow = () => setShow(true);


    const [Toastshow, setToastShow] = useState(false);
    const [name, setName] = useState(localStorage.getItem("name"));
    const [age, setAge] = useState(localStorage.getItem("age"));
    const [id, setId] = useState(localStorage.getItem("id"));
    const [batch, setBatch] = useState(localStorage.getItem("batch"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [joiningDate, setJoiningDate] = useState(localStorage.getItem("joiningDate"));
    const [lastPaidMonth, setLastPaidMonth] = useState(new Date(localStorage.getItem("lastPaidMonth")));
    const [newBatch,setNewBatch] = useState(-1);
    const [currentDate,setCurrentDate] = useState(()=>{
      const d = Date.now();
      return new Date(d)
    })
    const [canPay,setCanPay] = useState(() => {
      return (currentDate.getMonth() === lastPaidMonth.getMonth())
    });


    // const [currentDate,setCurrentDate] = useState(Date.now());
    // const [lastDate,setLastDate] = useState(lastPaidMonth);
    
  

    const toastClose = () => setToastShow(false);
    const toastShow = () => setToastShow(true);
    // const [cacheData, setCacheData] = React.useState("not fetched till now");

/** 
    useEffect(async () => {
      
  
    // if (typeof caches === 'undefined') return false;
    
    
    const cacheStorage = await caches.open('MyCache');
    const cachedResponse = await cacheStorage.match('https://yogaformbackend-production.up.railway.app/');
    
    // If no cache exists
    if (!cachedResponse || !cachedResponse.ok) {
      setCacheData('Fetched failed!')
    }
  
    cachedResponse.json().then((item) => {
      console.log(item);
      setCacheData(item)
    });
    console.log(cacheData);
  // };
    }, [])
    **/

    

    // const { current: myArray } = useRef(["one", "two", "three"]);
    
    const pay = async () => {
      console.log(id);

      if(newBatch === -1)
      {
        alert("select a batch");
        return;
      }

      let batchNumber ;

      if(newBatch==="first")
      {
        batchNumber=1;
      }
      else if(newBatch==="second")
      {
        batchNumber=2;
      }
      else if(newBatch==="third")
      {
        batchNumber=3;
      }
      else if(newBatch==="fourth")
      {
        batchNumber=4;
      }
      
      
      await axios.post('https://yogaformbackend-production.up.railway.app/api/batchChange', {
        newBatch: batchNumber,
        id : id
      })
      .then(function (response) {
        console.log(response);
        alert("paid successfully");
        setCanPay(true);
        handleClose()
        toastShow()
        // resp = response;
      })
      .catch(function (error) {
        console.log(error);
        alert("something went wrong try again")
        alert('Invalid Credentials.')
      });

      
    }

   
  return (
      <>
      
       <div className="form">
          <div className="form-body">
            <div><b><center><h4>Dashboard</h4></center></b></div>
            <div class="form-group">
                    <label className="form_label" for="name">Name</label>
                    <div class="form-control" id="name" name="name"  placeholder="Enter Your Name">{name}</div>
                   
            </div>   
            <div class="form-group">
                    <label className="form_label" for="email">Email</label>
                    <div class="form-control" id="email" name="email" placeholder="Enter Your Email Address">{email}</div>
            </div>   
            <div class="form-group">    
                    <label className="form_label" for="age">Age</label>
                    <div  class="form-control"  id="age" name="age" placeholder="Enter Your Age">{age}</div>
            </div>
           
            <div class="form-group">
                    <label className="form_label" for="batch">Current Batch</label>
                    <div  class="form-control" id="currentbatch" name="currentbatch">{batch==="-1" ? "No Batch Assigned" : batch}</div>
            </div>
            
            <div class="footer">
              <button className = "paybtn" variant="primary" onClick={() => {
                handleShow()
                }}
                title={() =>{
                  if(canPay)
                  return"button is disabled"
                  else
                  return"click to pay"
                }}
                disabled={canPay}  
                >Pay Now</button>
              <Button variant="danger" style={{color:"white"}}><Link to="/" className='logoutbtn' style={{color:"white"}} >Logout</Link></Button>
          </div>
         </div>
        </div>




        
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Your Batch Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div class="form-group">
            
                    <select name="batch" class="form-control" id="batch" onChange={(e) =>{
                      setNewBatch(e.target.value)
                    }}>
                        <option value="default" selected disabled>Select Your Batch Timing</option>
                        <option value="first">6-7 AM</option>
                        <option value="second">7-8 AM</option>
                        <option value="third">8-9 AM</option>
                        <option value="fourth">5-6 PM</option>
                    </select>
                    <p>NOTE: Fees for the yoga classes is ₹ 500 per month(You can enroll any day but you have to pay for the entire month)</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick = { ()=>{
              pay()
                
              }}
                >
            Pay Now
          </Button>
        </Modal.Footer>
        </Modal>


        <Row>
      <Col xs={6}>
        <Toast onClose={toastClose} show={Toastshow} delay={2000} autohide>
          <Toast.Header className="rounded me-2" alt=""/>
          <Toast.Body>Congratulations! You have enrolled successfully.</Toast.Body>
        </Toast>
        </Col>
        </Row>






      
    </>
  )
}