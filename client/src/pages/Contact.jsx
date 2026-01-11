import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Accordion } from "react-bootstrap";
import '../css/Contact.css'
import MyNavBar from "../component/MyNavBar";
import Footer from "../component/Footer";
import axios from "axios";

function Contact() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    //validation
        if(!name || !email || !message){
            alert("Please fill in all fields")
            return;
        }

    axios.post('http://localhost:3001/contact',{name,email,message})
      .then(result=>{
        console.log(result)
        alert(result.data.message)
      })
      .catch(err=>{
        alert(err.response.data.message)
        console.log(err)
      })

  }


  return (
    <div>
    <MyNavBar/>
    <Container className="my-5">
      <h2 className="mb-4 text-center">Contact Us</h2>

      <Row>
        {/* Contact Form */}
        <Col md={6}>
          <h5>Send us a message</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your message" onChange={(e)=>setMessage(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        {/* Map */}
        <Col md={6} className="mt-4 mt-md-0">
          <h5>Our Location</h5>
          <div className="map-container">
            <iframe
              title="Wariyapola Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.917152888074!2d80.19742597431242!3d7.668214394061961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae310391ce026f5%3A0x49ef0420e4f226c!2sWariyapola%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1706421000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
      </Row>

      {/* Accordion for FAQs */}
      <Accordion className="mt-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are your working hours?</Accordion.Header>
          <Accordion.Body>
            We are open Monday to Saturday from 9:00 AM to 7:00 PM. Closed on Sundays.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Do you accept walk-ins?</Accordion.Header>
          <Accordion.Body>
            Yes, we do accept walk-ins, but we recommend booking an appointment for guaranteed service.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What services do you offer?</Accordion.Header>
          <Accordion.Body>
            We provide haircuts, beard trims, shaving, hair treatments, and kids’ haircuts.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
    <Footer/>   
    </div>
  );
}

export default Contact