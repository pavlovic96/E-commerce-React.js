import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import emailjs from "@emailjs/browser";

import { Container, Row, Col } from "react-bootstrap";

import "./Contact.css";

const Contact = () => {
  const [user, setUser] = useState({ userName: "", userEmail: "", msg: "" });
  const [msg, setMsgSent] = useState("");
  const form = useRef();

  const msgSent = () => {
    setMsgSent("Message successfully sent!");
    setTimeout(() => {
      setMsgSent("");
    }, 1000);
  };

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
    msgSent()
  };

  return (
    <div>
     
      <div className="hero-section-contact animate__animated animate__fadeIn"> <Container>
        <h2>
          Be free <br /> to contact us
        </h2></Container>
      </div>
      <Container>
        <Row>
          <Col md={12}>
            <div className="contact-div animate__animated animate__fadeIn">
              <form className="contact-us-form" ref={form} onSubmit={sendEmail}>
                <label htmlFor="user_name">Your name:</label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required={true}
                  onChange={(e) => {
                    setUser({ ...user, userName: e.target.value });
                  }}
                  value={user.userName}
                />
                <label htmlFor="user_email">E-mail:</label>
                <input
                  type="email"
                  name="user_email"
                  required={true}
                  onChange={(e) => {
                    setUser({ ...user, userEmail: e.target.value });
                  }}
                  value={user.userEmail}
                />
                <label htmlFor="msg">Message:</label>
                <textarea
                  name="msg"
                  id=""
                  cols="30"
                  rows="4"
                  required={true}
                  onChange={(e) => {
                    setUser({ ...user, msg: e.target.value });
                  }}
                  value={user.msg}
                ></textarea>
                <input type="submit" value="Send" className="send" />
              </form>
            </div>
            <p className="msgSent">{msg}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
