import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import "../Firebase/authentication";
import { initialisezFirebase } from "../Firebase/authentication";
import { createUser } from "./../Firebase/authentication";

import firebaseConfig from "../Firebase/Firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from "./../../../App";

const SignIn = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  initialisezFirebase();

  const { user } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = user;

  const [userInfo, setUserInfo] = useState({
    isSigned: false,
    name: "",
    email: "",
    password: "",
    message: "",
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    createUser(userInfo.name, userInfo.email, userInfo.password).then((res) => {
      setUserInfo(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  const handleOnBlur = (e) => {
    let isValid = false;

    if (e.target.name === "name") {
      isValid = true;
    }

    if (e.target.name === "email") {
      const re = /\S+@\S+\.\S+/;
      isValid = re.test(e.target.value);
    }

    if (e.target.name === "password") {
      isValid = e.target.value.length >= 6;
    }

    if (isValid) {
      let newUser = { ...userInfo };
      newUser[e.target.name] = e.target.value;
      setUserInfo(newUser);
    }
  };

  console.log(userInfo);

  return (
    <div className="main login">
      <p className="sign" align="center">
        Sign in
      </p>
      <form onSubmit={handleOnSubmit} className="form1">
        <input
          onBlur={handleOnBlur}
          className="un "
          type="text"
          align="center"
          placeholder="User Name"
          name="name"
          required
        />
        <input
          onBlur={handleOnBlur}
          className="un "
          type="text"
          align="center"
          placeholder="User Email"
          name="email"
          required
        />
        <input
          onBlur={handleOnBlur}
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          name="password"
          required
        />
        <br />
        <button type="submit" className="btn submit" align="center">
          Log in
        </button>

        <p>{userInfo.message}</p>

        <p className="register">
          Already a mebmer?{" "}
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <span> Log In </span>
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignIn;
