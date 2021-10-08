import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trading.css";

export default function Card(props) {
  const [saveAllNeeded, setSaveAllNeeded] = useState([]);
  const [allNeeded, setAllNeeded] = useState(props.allNeeded);
  const createAChat = () => {
    axios
      .post("/trading", {
        user_id_1: props.userId,
        user_id_2: props.user_id,
      })
      .then((res) => {
        window.location.pathname = "/chat";
      });
  };

  console.log(props);
  function saveNeeded() {
    allNeeded.forEach((obj) => {
      if (obj.user_id === props.user_id) {
        console.log(saveAllNeeded, "save all needed")
        setSaveAllNeeded([
          ...saveAllNeeded,
          {
            service_category: obj.service_category,
            service_define: obj.service_define,
          },
        ]);
        console.log(saveAllNeeded, "save all needed")
      }
    });
  }
  useEffect(() => {
    saveNeeded();
  }, []);

  console.log(saveAllNeeded, "needed ones");
  return (
    <div className="match_card">
      <h3>Offering</h3>
      <p>
        {props.service_category}: {props.service_define}
      </p>
      <h3>Needing</h3>
      {saveAllNeeded.map((obj) => (
      <p>{obj.service_category}: {obj.service_define}
      </p>
      ))}
      <button className="chat_button" onClick={createAChat}>
        Chat
      </button>
    </div>
  );
}
