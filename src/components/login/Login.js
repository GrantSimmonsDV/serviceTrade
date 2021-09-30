//Login
//Display welcome / login fields
// Can enter username
// Can enter password
// Can click Log In button
// POST request to login  (actually POST request)

import React from "react";
import axios from "axios";

export default function Login(props) {
  
  axios.post("/login")
//   ,{ email, password }
.then((res) => {
   props.handleUserId(res.data.user_id)
})

  
  return (
    <div className="login">
      <h2>Login comp</h2>
    </div>
  );
}
