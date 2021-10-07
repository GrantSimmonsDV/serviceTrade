import React, { useState } from "react";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    axios.post("/register", { email, password }).then((res) => {
      console.log(res);
      alert(res.data);
    });
  };

  return (
    <div className="register">
      <div className="register_container">
      <h2>Register</h2>
      <form action="" className="register_fields">
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
      </form>
      <button onClick={handleClick} className="register_button">
        Register
      </button>
      </div>
      <div id="register_info">	&#169; Developed by Grant Simmons. Devmountain-Capstone</div>
    </div>
  );
}
