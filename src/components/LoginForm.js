import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ls from 'local-storage'
import {useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function LoginForm() {

   const [password, setPassword] = useState(false);
    const [email, setEmail] = useState(false);

    const navigate = useNavigate();

    const login = async ()  => {
      console.log(`email: ${email}, password:${password}`);
      let resp;

      await axios.post('https://yogaformbackend-production.up.railway.app/api/login', {
          email: email,
          password : password
        })
        .then(function (response) {
          console.log(response);
          resp = response;
        })
        .catch(function (error) {
          console.log(error);
          alert('Invalid Credentials.')
        });

        console.log(`response for register is ${resp}`);

        // storing in browser storage
        // cachename,url  ,response

      //   addDataIntoCache('MyCache',
      // 'https://localhost:300','SampleData')

      // 

        const data = new Response(JSON.stringify(resp));
  
        // if ('caches' in window) {
        //   // Opening given cache and putting our data into it
        //   caches.open('MyCache').then((cache) => {
        //     cache.put('https://yogaformbackend-production.up.railway.app/api/register', data);
        //     alert('Data Added into cache!')
        //   });
        // }

        //

        ls.set('dataKey', data);
        if(resp.status===200){
        navigate("/Dashboard");
        }


  }
  return (
    <>
    <div className="form">
          <div className="form-body">
            <div><b><center><h4>Login Form</h4></center></b></div>
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
                    <label className="form_label" for="password">Password</label>
                    <input onChange={e => 
                        {
                            setPassword(e.target.value);
                        }
                    } type="password" class="form-control" id="password" name="password" placeholder="Enter Your Password" required/>
                    <div class="valid-feedback">Valid.</div>
                    <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="footer">
              <Button onClick={login} variant="primary" className='signinbtn'>Sign In</Button>
              <Button variant="danger" className='signinbtn'><Link to ="/RegistrationForm" className='signinbtn' style={{color:"white"}}>Sign Up</Link></Button>
             
          </div>
          </div>
    </div>
    </>
    
  )
}
 