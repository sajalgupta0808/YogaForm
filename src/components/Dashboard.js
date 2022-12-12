import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Toast from 'react-bootstrap/Toast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



export default function Dashboard() {
    const [show, setShow] = useState(false);
    //const [showModal,setShowModal] = useState(false);
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => setShow(true);


    const [Toastshow, setToastShow] = useState(false);
    const toastClose = () => setToastShow(false);
    const toastShow = () => setToastShow(true);


    return ( <
        >
        <
        div className = "form" >
        <
        div className = "form-body" >
        <
        div > < b > < center > < h4 > Dashboard < /h4></center > < /b></div >
        <
        div class = "form-group" >
        <
        label className = "form_label"
        for = "name" > Name < /label> <
        p type = "text"
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
        p type = "email"
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
        p type = "number"
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
        p type = "date"
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
        for = "batch" > Current Batch < /label> <
        p type = "batch"
        class = "form-control"
        id = "currentbatch"
        name = "currentbatch" / >
        <
        /div>

        <
        div class = "footer" >
        <
        Button variant = "primary"
        onClick = { handleShow } > Pay Now < /Button> <
        Button variant = "danger"
        style = {
            { color: "white" } } > < Link to = "/"
        className = 'logoutbtn'
        style = {
            { color: "white" } } > Logout < /Link></Button >
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
        Modal.Title > Select Your Batch Timing < /Modal.Title> <
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
        p > NOTE: Fees
        for the yoga classes is₹ 500 per month(You can enroll any day but you have to pay
            for the entire month) < /p> <
        /div> <
        /Modal.Body> <
        Modal.Footer >
        <
        Button variant = "secondary"
        onClick = { handleClose } >
        Close <
        /Button> <
        Button variant = "primary"
        onClick = {
            () => {
                handleClose()
                toastShow()
            }
        } >
        Pay Now <
        /Button> <
        /Modal.Footer> <
        /Modal>


        <
        Row >
        <
        Col xs = { 6 } >
        <
        Toast onClose = { toastClose }
        show = { Toastshow }
        delay = { 2000 }
        autohide >
        <
        Toast.Header className = "rounded me-2"
        alt = "" / >
        <
        Toast.Body > Congratulations!You have enrolled successfully. < /Toast.Body> <
        /Toast> <
        /Col> <
        /Row>







        <
        />
    )
}