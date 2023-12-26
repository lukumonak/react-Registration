import React from "react";
import Navbar from "../components/Navbar";
import RegistrationForm from "../components/RegistrationForm";
import '../components/Registration.css'
// import '../components/'
// import {Form} from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";


function Registration() {
    return(
        <>
            <Navbar />

            <div className='det'>
            <div>&#9733;</div>

            <RegistrationForm />

            <div>&#9733;</div>
            </div>

        </>

    )

}
export default Registration