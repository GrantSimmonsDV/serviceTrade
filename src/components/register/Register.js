
import React from "react";
import axios from "axios";

export default function Register() {
  const email = "";
  const password = "";

  const handleClick = () => {
    
    axios.post("/register",{ email, password })
    .then((res) => {
      alert(res.data);
    });
    
  }
  
  
  return (
    <div className="register">
      <h2>Register comp</h2>
      <form action="" className="register_fields">
        <input type="text" name="email" id="email" />
        <input type="password" name="password" id="password" />
      </form>
      <button onClick={handleClick} className="register_button">Register</button>
    </div>
  );
}