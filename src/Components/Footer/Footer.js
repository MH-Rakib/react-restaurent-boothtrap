import React from "react";
import logo from "../../Assets/logo.png";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={3}>
            <div className="footer_logo">
              <img src={logo} alt="" />
              <p>+880168535186</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </Col>

          <Col className="d-md-none d-lg-block" lg={3}></Col>

          <Col xs={6} sm={6} md={3} lg={3}>
            <div className="footer_links">
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
            </div>
          </Col>

          <Col xs={6} sm={6} md={3} lg={3}>
            <div className="footer_links">
              <p>About us</p>
              <p>About us</p>
              <p>About us</p>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <div className="footer_bottom">
              <p style={{ color: "rgb(255, 64, 112)" }}>
                Copyright all right reserved by MHR.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
