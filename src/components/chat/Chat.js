//Chat Page
//Open and display chat with other party of match
// Access to Navbar
//Router Links #23
// User can click on other chats in thier chat history
//GET request to get chat conversation
// User is able to type in a message
// Click send
//POST request to create message
// Edit a message ??MVP (maybe not) ****************
//PUT request to update message
// Delete a message ??MVP (maybe not) *****************
//DELETE request to remove message

import React from "react";
import axios from "axios";

export default function Chat() {
  // User is able to type in a message
  // Click send
  axios.get("/chat/:id").then((res) => {

  });

  //to create message
  axios.post("/chat")
  .then((res) => {
    
  });

  return (
    <div className="chat">
      <h2>Chat comp</h2>
    </div>
  );
}
