import React, { useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../css/AppointmentPage.css";

function AppointmentPage() {

  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  //validation
  const validateForm = () => {
    let newErrors = {};

    if (!service) {
      newErrors.service = "Please select a service";
    }

    if (!date) {
      newErrors.date = "Please select a date";
    } else if (date < today) {
      newErrors.date = "Date cannot be in the past";
    }

    if (!time) {
      newErrors.time = "Please select a time";
    } else {
      const hour = parseInt(time.split(":")[0], 10);
      if (hour < 9 || hour >= 20) {
        newErrors.time = "Appointments available between 9:00 AM and 8:00 PM";
      }
    }

    if (!name) {
      newErrors.name = "Full name is required";
    } else if (!/^[A-Za-z ]{3,}$/.test(name.trim())) {
      newErrors.name = "Name must contain only letters and at least 3 characters";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!number) {
      newErrors.number = "Phone number is required";
    } else if (!/^07\d{8}$/.test(number)) {
      newErrors.number = "Phone number must be 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    axios
      .post("http://localhost:3001/appointment", {
        service,
        date,
        time,
        name,
        email,
        number,
      })
      .then(() => {
        alert("Appointment booked successfully!");
        setService("");
        setDate("");
        setTime("");
        setName("");
        setEmail("");
        setNumber("");
        setErrors({});
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Book an Appointment
              </Card.Title>

              <Form onSubmit={handleSubmit} noValidate>

                <Form.Group className="mb-3">
                  <Form.Label>Service</Form.Label>
                  <Form.Select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    <option value="">Select a service</option>
                    <option value="Hair Cut">Hair Cut</option>
                    <option value="Hair Coloring">Hair Coloring</option>
                    <option value="Facial">Facial</option>
                    <option value="Beard Trim">Beard Trim</option>
                  </Form.Select>
                  {errors.service && <small className="text-danger">{errors.service}</small>}
                </Form.Group>

                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        min={today}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      {errors.date && <small className="text-danger">{errors.date}</small>}
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                      {errors.time && <small className="text-danger">{errors.time}</small>}
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <small className="text-danger">{errors.name}</small>}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <small className="text-danger">{errors.email}</small>}
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="Enter your phone number"
                    value={number}
                    onChange={(e) =>
                      setNumber(e.target.value.replace(/\D/g, ""))
                    }
                  />
                  {errors.number && <small className="text-danger">{errors.number}</small>}
                </Form.Group>

                <Button variant="dark" type="submit" className="w-100">
                  Book Appointment
                </Button>

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AppointmentPage;
