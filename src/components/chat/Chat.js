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

import React, { useState, useEffect } from "react";
import axios from "axios";
import ChatList from "./ChatList";
import "./Chat.css"

export default function Chat(props) {
  const [message_text, setMessage_Text] = useState("");
  const [openChats, setOpenChats] = useState([]);

  // User is able to type in a message
  // Click send
  // axios.get("/chat/:id").then((res) => {});

  //to create message
  const handleClickMsg = () => {
    axios.post("/chat", { message_text }).then((res) => {
      setMessage_Text(res.data);
    });
  };

  useEffect(() => {
    function getChats() {
      axios
        .get("/chat", {
          user_id_1: props.userId,
        })
        .then((res) => {
          setOpenChats(res.data);
        });
    }
    return () => {
      getChats();
    };
  }, [props.userId]);

  return (
    <div className="chat">
      <h2 className="title">Chat</h2>

      {/* <h3>Chats</h3> */}
      {openChats.map((obj) => (
        <ChatList
          key={obj.id}
          user_id_1={obj.user_id_1}
          user_id_2={obj.user_id_2}
          userId={props.userId}
        />
      ))}

      <h3 className="chat_subtitle">Start chatting with Ryan Johnson</h3>
      <div className="current_chat">
        {/* <p>chat message</p>
        <p>chat message</p>
        <p>chat message</p> */}
        <input className="message_input" type="text" />
        <button onClick={handleClickMsg}>Send</button>
      </div>
    </div>
  );
}
