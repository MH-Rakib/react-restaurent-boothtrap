import React from "react";
import "./Auth.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Login from "./Login/Login";
import { Switch, path, useLocation } from "react-router-dom";
import { Route } from "react-router-dom";
import SignIn from "./Signin/SignIn";

const Auth = () => {
  // let { path, url } = useLocation();
  return (
    <Container>
      <Row>
        <Col lg={5} className="mx-auto">
          <Switch>
            <Route exact path={"/login"}>
              <Login></Login>
            </Route>

            <Route path={`/login/create_user`}>
              <SignIn></SignIn>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
