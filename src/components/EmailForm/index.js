import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";

const EmailForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send email to user
    emailjs
      .send(
        "service_q4ilh7s",
        "template_91th0ym",
        { to_email: email },
        "00x8ZD5v3NARNUhHC"
      )
      .then(() => {
        // Redirect to signup page
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Email failed to send: ", error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <h2 className="text-center mb-4">Enter your email</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
