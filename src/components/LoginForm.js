import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


export default function LoginForm() {
    return ( <
        >
        <
        div className = "form" >
        <
        div className = "form-body" >
        <
        div > < b > < center > < h4 > Login Form < /h4></center > < /b></div >
        <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "email" > Email < /label> <
        input type = "email"
        class = "form-control"
        id = "email"
        name = "email"
        placeholder = "Enter Your Email Address"
        required autofocus / >
        <
        div class = "valid-feedback" > Valid. < /div> <
        div class = "invalid-feedback" > Please fill out this field. < /div> <
        /div>   

        <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "password" > Password < /label> <
        input type = "password"
        class = "form-control"
        id = "password"
        name = "password"
        placeholder = "Enter Your Password"
        required / >
        <
        div class = "valid-feedback" > Valid. < /div> <
        div class = "invalid-feedback" > Please fill out this field. < /div> <
        /div> <
        div class = "footer" >
        <
        Button variant = "primary"
        className = 'signinbtn' > < Link to = "/Dashboard"
        className = 'signinbtn'
        style = {
            { color: "white" } } > Sign In < /Link></Button >
        <
        Button variant = "danger"
        className = 'signinbtn' > < Link to = "/RegistrationForm"
        className = 'signinbtn'
        style = {
            { color: "white" } } > Sign Up < /Link></Button >

        <
        /div> <
        /div> <
        /div> <
        />

    )
}