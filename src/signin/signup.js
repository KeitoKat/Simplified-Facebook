import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  //USESTATE
  const [registeredUsers, setRegisteredUsers] = useState([
    { email: "khammy@gmail.com", password: "KM1234" },
    { email: "rora@gmail.com", password: "RR1234" },
    { email: "dom@gmail.com", password: "DM1234" }
  ]);
  const [isRegistered, setIsRegistered] = useState(false);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);

  //HANDLER FUNCTION
  const InfoHandler = (e, setInfo) => {
    return setInfo(e.target.value);
  };

  //FUNCTIONS
  const registerUser = (em, pas) => {
    if (em === "" && pas === "") {
      alert("please enter your email and password");
    } else if (registeredUsers.some((d) => d.email === em)) {
      alert("you are already registered");
    } else {
      makeUser(email, password);
      alert("you have been signed up");
      setIsRegistered(true);
    }
  };

  const makeUser = (em, pas) => {
    var users = [
      ...registeredUsers,
      {
        email: em,
        password: pas
      }
    ];
    setRegisteredUsers(users);
  };

  //MAIN CODE
  return (
    <Fragment>
      <div style={{ margin: "1rem" }}>
        <img
          src="https://www.logomaker.com/wp-content/uploads/2018/01/facebook-logo-font-1.png"
          class="rounded-3"
          style={{ height: "5rem" }}
          alt="facebook"
        />
        {/* SIGNUP FORM */}
        <h1>Create a new account</h1>
        <form
          style={{
            width: "20rem",
            padding: "0.8rem",
            borderRadius: "3%",
            boxShadow: "0.2rem 1rem 3rem #888888"
          }}
          onSubmit={(e) => {
            e.preventDefault();
            registerUser(email, password);
          }}
        >
          {/* EMAIL */}
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="Email or Phone Number"
              onChange={(e) => InfoHandler(e, setEmail)}
            />
            <label for="floatingTextarea2">Email</label>
          </div>
          {/* PASSWORD */}
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingInput"
              placeholder="New password"
              onChange={(e) => InfoHandler(e, setPassword)}
            />
            <label for="floatingTextarea2">Password</label>
            {/* SIGN-UP BUTTON */}
            <div class="d-grid gap-2 mt-3">
              <button class="btn btn-success" type="submit" value="Submit">
                Sing Up
              </button>
            </div>
          </div>
        </form>
      </div>
      {isRegistered ? <Redirect to="/feed" /> : null}
    </Fragment>
  );
};

export default SignUp;
