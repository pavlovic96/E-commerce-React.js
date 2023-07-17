import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";

import { Container, Row, Col } from "react-bootstrap";

import "./Contact.css";

const Contact = () => {
  const [user, setUser] = useState({ userName: "", userEmail: "", msg: "" });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_98u7ujh",
        "template_oylpt67",
        form.current,
        "l52ox6RJ0E73zAw7m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setUser({ userName: "", userEmail: "", msg: "" });
  };

  return (
    <div>
      <div className="hero-section-contact">
        <h1>
          Be free <br /> to contact us
        </h1>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="contact-div">
              <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
                <label htmlFor="user_name">Your name:</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  onChange={(e) => {
                    setUser({ ...user, userName: e.target.value });
                  }}
                  value={user.userName}
                />
                <label htmlFor="user_email">E-mail:</label>
                <input
                  type="email"
                  name="user_name"
                  onChange={(e) => {
                    setUser({ ...user, userEmail: e.target.value });
                  }}
                  value={user.userEmail}
                />
                <label htmlFor="msg">Message:</label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="4"
                  onChange={(e) => {
                    setUser({ ...user, msg: e.target.value });
                  }}
                  value={user.msg}
                ></textarea>
                <input type="submit" value="Send" className="send" />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
