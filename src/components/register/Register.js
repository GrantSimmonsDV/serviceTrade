
import React from "react";
import axios from "axios";

export default function Register() {
  axios.post("/register"
//   ,{ email, password }
  )
  .then();
  
  return (
    <div className="register">
      <h2>Register comp</h2>
    </div>
  );
}