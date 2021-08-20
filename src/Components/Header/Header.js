import React from "react";
import "./Header.css";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import logo from "../../Assets/logo2.png";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../App";

const Header = () => {
  const { cart, user } = useContext(UserContext);
  const [cartData, setCartData] = cart;
  const [loggedInUser, setLoggedInUser] = user;

  // console.log(cartData);

  return (
    <div className="sticky-top bg-light mb-5">
      <Navbar>
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img className="header_logo" src={logo} alt="" />
          </Navbar.Brand>
          {/* <Navbar.Toggle /> */}

          <div>
            {loggedInUser.isSigned ? (
              <div>
                <div className="loged_in_user">
                  <FaUserCircle className="user_icon" /> &nbsp;
                  <span className="user_name">{loggedInUser.name}</span>
                </div>

                <Link to={"/cart"}>
                  <div className="cart">
                    <FaShoppingCart className="cart_icon" />
                    <span className="cart_count">{cartData.length}</span>
                  </div>
                </Link>
              </div>
            ) : (
              <div>
                <div className="login_signin_button">
                  <Link to={"/login"}>
                    <button className="btn signin_button">Log In</button>
                  </Link>
                </div>
                <Link to={"/cart"}>
                  <div className="cart">
                    <FaShoppingCart className="cart_icon" />
                    <span className="cart_count">{cartData.length}</span>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
