import React from "react";
import "./Checkout.css";
import { Container } from "react-bootstrap";
import { Row, Form, Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { UserContext } from "./../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;

  const total = cartData.reduce(
    (prev, data) =>
      (prev += parseFloat(data.price) * parseFloat(data.quantity)),
    0
  );

  const handlePlaceOrder = () => {
    setCartData([]);
  };

  const vat = total * 0.05;
  const deliveryFee = 30;

  const grandTotal = total + vat + deliveryFee;

  return (
    <Container style={{ padding: "40px 0" }}>
      <Row>
        <Col lg={7}>
          <div className="checkout_address" style={{ textAlign: "left" }}>
            <Form>
              <Row className="mb-3 ">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              {/* <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
            </Form>
          </div>
        </Col>

        <Col lg={1}></Col>

        <Col lg={4}>
          <div className="checkout_cart_details" style={{ textAlign: "left" }}>
            <h4>From: Ghorowa Restaurent</h4>
            <br />
            <p>Arriving within 30 minutes.</p>
            <br />
            <br />
            <div className="checkout_calculations">
              <p>
                <span style={{ float: "left" }}>Total</span>{" "}
                <span style={{ float: "right" }}> ${total.toFixed(2)}</span>{" "}
              </p>
              <br />
              <br />
              <p>
                <span style={{ float: "left" }}>Vat</span>{" "}
                <span style={{ float: "right" }}> ${vat.toFixed(2)}</span>{" "}
              </p>
              <br />
              <br />
              <p>
                <span style={{ float: "left" }}>Delivery Charge</span>{" "}
                <span style={{ float: "right" }}>
                  {" "}
                  ${deliveryFee.toFixed(2)}
                </span>{" "}
              </p>
              <br />
              <hr />
              <p>
                <span style={{ float: "left" }}>Grand Total</span>{" "}
                <span style={{ float: "right" }}>
                  {" "}
                  ${grandTotal.toFixed(2)}
                </span>{" "}
              </p>
              <br />
              <br />
              <br />

              <Link to={"/orderPlaced"}>
                <Button
                  onClick={handlePlaceOrder}
                  style={{
                    background: "rgb(250, 6, 67)",
                    border: "none",
                    padding: "8px 30px",
                  }}
                  type="submit"
                >
                  Place Order
                </Button>
              </Link>
            </div>

            {}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
