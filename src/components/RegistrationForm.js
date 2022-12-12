import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

export default function RegistrationForm() {
    return ( <
        >
        <
        div className = "form" >
        <
        div className = "form-body" >
        <
        div > < b > < center > Registration Form < /center></b > < /div> <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "name" > Name < /label> <
        input type = "text"
        class = "form-control"
        id = "name"
        name = "name"
        placeholder = "Enter Your Name"
        required autofocus / >
        <
        div class = "valid-feedback" > Valid. < /div> <
        div class = "invalid-feedback" > Please fill out this field. < /div> <
        /div>    <
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
        /div>    <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "age" > Age < /label> <
        input type = "number"
        class = "form-control"
        onchange = "validateAge(this.value)"
        id = "age"
        name = "age"
        placeholder = "Enter Your Age"
        required / >
        <
        div class = "valid-feedback" > Valid. < /div> <
        div class = "invalid-feedback" > Please fill out this field. < /div> <
        /div> <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "doj" > Date of Joining < /label> <
        input type = "date"
        class = "form-control"
        id = "doj"
        name = "doj"
        placeholder = "Enter Your Date of Joining"
        required / >
        <
        /div>

        <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "batch" > Batch < /label> <
        select name = "batch"
        class = "form-control"
        id = "batch" >
        <
        option value = "default"
        selected disabled > Select Your Batch Timing < /option> <
        option value = "first" > 6 - 7 AM < /option> <
        option value = "second" > 7 - 8 AM < /option> <
        option value = "third" > 8 - 9 AM < /option> <
        option value = "fourth" > 5 - 6 PM < /option> <
        /select> <
        /div> <
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
        div class = "form-group" >
        <
        label className = "form_label"
        for = "confirmpassword" > Confirm Password < /label> <
        input type = "password"
        class = "form-control"
        id = "confirmpassword"
        name = "confirmpassword"
        placeholder = "Re-enter Your Password"
        required / >
        <
        div class = "valid-feedback" > Valid. < /div> <
        div class = "invalid-feedback" > Please fill out this field. < /div> <
        /div>



        <
        div class = "footer" >
        <
        button type = "submit"
        class = "btn"
        color = 'red' > < Link to = "/" > Register < /Link></button >
        <
        button type = "login"
        class = "btn"
        color = 'blue' > < Link to = "/" > SignIn < /Link></button >
        <
        /div> <
        /div>       <
        /div> <
        />
    )
}