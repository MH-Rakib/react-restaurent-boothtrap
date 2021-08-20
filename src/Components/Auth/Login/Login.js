import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { initialisezFirebase, loginUser } from "./../Firebase/authentication";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./../../../App";

const Login = () => {
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

    loginUser(userInfo.email, userInfo.password).then((res) => {
      setUserInfo(res);
      setLoggedInUser(res);
      history.replace(from);
    });
  };

  // console.log(userInfo);

  const handleOnBlur = (e) => {
    let isValid = false;

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

  const { path, url } = useLocation();
  return (
    <div className="main login">
      <p className="sign" align="center">
        Log in
      </p>
      <form className="form1" onSubmit={handleOnSubmit}>
        <input
          className="un "
          type="text"
          align="center"
          placeholder="User Email"
          name="email"
          onBlur={handleOnBlur}
        />
        <input
          className="pass"
          type="password"
          align="center"
          placeholder="Password"
          name="password"
          onBlur={handleOnBlur}
        />
        <br />
        <button type="submit" className="btn submit" align="center">
          Log in
        </button>

        <p
          style={{
            color: "rgb(255, 22, 80)",
            fontWeight: "500",
            fontSize: "16px",
            padding: "15px 0",
          }}
        >
          {userInfo.message}
        </p>

        <p className="register">
          Not a mebmer?{" "}
          <Link to={`/login/create_user`} style={{ textDecoration: "none" }}>
            <span> Register </span>
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
