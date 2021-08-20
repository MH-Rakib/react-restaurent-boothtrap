import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <Container style={{ padding: "70px 0" }}>
      <Row>
        <Col lg={12}>
          <h2>Your Order has Been Placed</h2>
        </Col>
        <br />
        <br />
        <br />
        <br />
        <Col lg={12}>
          <Link to={"/"}>
            <button
              className="btn"
              style={{
                padding: "8px 30px",
                background: "rgb(255, 22, 80)",
                fontWeight: "700",
                color: "#fff",
              }}
            >
              Back To Home
            </button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderPlaced;
