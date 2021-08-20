import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import { useContext } from "react";
import { UserContext } from "./../../App";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useContext(UserContext);
  const [cartData, setCartData] = cart;

  const handleDeleteItem = (id) => {
    const updatedCart = cartData.filter((item) => item.id !== id);
    setCartData(updatedCart);
  };

  return (
    <div className="cart_page">
      <Container>
        <Row>
          <Col lg={8} className="m-auto">
            {cartData.map((item) => (
              <div className="cart_item">
                <Row className="align-items-center">
                  <Col xs={2} sm={2} md={2} lg={2}>
                    <div className="cart_item_info cart_item_info_image">
                      <img style={{ width: "100%" }} src={item.image} alt="" />
                    </div>
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <div className="cart_item_info">
                      <p>{item.name}</p>
                    </div>
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <div className="cart_item_info">
                      <p>
                        ${item.price} * {item.quantity}{" "}
                      </p>
                    </div>
                  </Col>
                  <Col xs={3} sm={3} md={3} lg={3}>
                    <div className="cart_item_info">
                      <p>
                        ${parseFloat(item.price) * parseFloat(item.quantity)}
                      </p>
                    </div>
                  </Col>
                  <Col xs={1} sm={1} md={1} lg={1}>
                    <div className="cart_item_info cart_item_info_delete ">
                      <p onClick={() => handleDeleteItem(item.id)}>
                        <RiDeleteBinFill></RiDeleteBinFill>
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to={"/checkout"}>
              <button className="btn cart_to_checkout">
                Proceed To Checkout
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
