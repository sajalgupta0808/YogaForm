import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return ( <
        >
        <
        div className = "form" >
        <
        div className = "form-body" >
        <
        div > < b > < center > Dashboard < /center></b > < /div> <
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
        /div>




        <
        div class = "footer" >
        <
        Button variant = "primary"
        onClick = { handleShow } > Change Batch Timing < /Button> <
        Button variant = "danger" > < Link to = "/" > Logout < /Link></Button >
        <
        /div> <
        /div> <
        /div>





        <
        Modal show = { show }
        onHide = { handleClose } >
        <
        Modal.Header closeButton >
        <
        Modal.Title > Cahnge Batch Timing < /Modal.Title> <
        /Modal.Header> <
        Modal.Body >
        <
        div class = "form-group" >
        <
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
        /Modal.Body> <
        Modal.Footer >
        <
        Button variant = "secondary"
        onClick = { handleClose } >
        Close <
        /Button> <
        Button variant = "primary"
        onClick = { handleClose } >
        Save Changes <
        /Button> <
        /Modal.Footer> <
        /Modal>

        <
        />
    )
}