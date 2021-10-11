//Login
//Display welcome / login fields
// Can enter username
// Can enter password
// Can click Log In button
// POST request to login  (actually POST request)

import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Function takes in email and password input from user, sets the user's id to state, sends the user to the Trading page, and alerts user with welcome greeting. 
  const handleClick = (e) => {
    e.preventDefault();
    axios.post("/login", { email, password }).then((res) => {
      props.handleUserId(res.data.id);
      props.history.push("/trading");
      alert(`Welcome, ${res.data.full_name}`);
    });
    // //used for 404 errors, or network errors
    // .catch((error) => {
    //   console.log(error)
    // })
  };

  return (
    <div className="login">
      {/* <img src="serve_pic.png" alt="" /> */}
      <div className="login_container">
        <h2>Login</h2>
        <form action="" className="login_fields">
          {/* <div className="login_input"> */}
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* </div> */}
        </form>
        <button onClick={handleClick} className="login_button">
          Login
        </button>
      </div>
        <p id="login_info">	&#169; Developed by Grant Simmons. Devmountain-Capstone</p>
    </div>
  );
}
