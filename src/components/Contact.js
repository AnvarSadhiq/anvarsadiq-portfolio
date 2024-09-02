import { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {

  const handleClick = () => {
    const phoneNumber = "7025040484"; // Replace with the phone number you want to connect with
    const message = "Hello, I would Like Contact with you!"; // Optional: Default message to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sitlyjq", "template_nlv2d47", form.current, {
        publicKey: "4mf-o_8YZI_m4bnHT",
      })
      .then(
        (result) => {
          console.log("Message sent!", result.text);
        },
        (error) => {
          console.log("Message failed, Something went wrong...", error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} lg={4}>
            <div className="sidebar-info_more">
              <div className="separator"></div>
              <ul className="contacts-list">
                <li className="contact-item">
                  <div className="icon-box"></div>
                  <div className="contact-info">
                    <p className="contact-title">Email</p>
                    <a
                      href="mailto:anvarsadhiqwyd7@gmail.com"
                      className="contact-link"
                    >
                      anvarsadhiqwyd7@gmail.com
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="icon-box"></div>
                  <div className="contact-info">
                    <p className="contact-title">Whats App</p>
                    <a href="tel:+919526569962" className="contact-link" onClick={handleClick}>
                      +91 7025040484
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="icon-box"></div>
                  <div className="contact-info">
                    <p className="contact-title">Instagram</p>
                    <a
                      href="https://www.instagram.com/anvarsadhiq._/" target="_blank"
                      className="contact-link"
                    >
                      anvarsadhiq._
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="icon-box"></div>
                  <div className="contact-info">
                    <p className="contact-title">Location</p>
                    <address>Wayanad, Kerala, India</address>
                  </div>
                </li>
              </ul>
              <div className="separator"></div>
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>contact Form</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" required />
                    <label>Mobile Number</label>
                    <input type="phone" name="number" required />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
