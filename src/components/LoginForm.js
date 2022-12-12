import React from 'react'
import { Link } from 'react-router-dom'


export default function LoginForm() {
    return ( <
        >
        <
        div className = "form" >
        <
        div className = "form-body" >
        <
        div > < b > < center > Login Form < /center></b > < /div> <
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
        button type = "login"
        class = "btn signin"
        color = 'blue' > < Link to = "/Dashboard" > SignIn < /Link></button >
        <
        button type = "register"
        class = "btn"
        color = 'red' > < Link to = "/RegistrationForm" > SignUp < /Link></button >
        <
        /div> <
        /div> <
        /div> <
        />

    )
}