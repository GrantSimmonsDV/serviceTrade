import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trading.css";

export default function Card(props) {
  const [saveAllNeeded, setSaveAllNeeded] = useState([]);
  const [allNeeded, setAllNeeded] = useState(props.allNeeded);
  

  // Once they click the chat button this function creates a chat and takes the current user's user id (userId) and the user id associated with the service card (user_id) they clicked on and adds that to the db for that chat. Also as they click the chat button it sends the user to the Chat page. User ids are renamed with the colons to match the user id names on the backend (user_id_1, user_id_2)
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
  
  // This function takes the array of allNeeded on state and iterates through each of the objects in that allNeeded array and evaluates the user id from the object being currently iterated over and the user id from props from the offeredCard. If those user ids match then save to state these two values (service_category and service_define) off the current object of all needed services of that user with a spread opperator. 
  // This function is called within a useEffect so it will be fired every time the -- component is rendered
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
      {/* This is displaying the offered service category and service define on props from the Trading component. */}
            <p>
        {props.service_category}: {props.service_define}
      </p>
      <h3>Needing</h3>
      {/* This is mapping over saveAllNeeded that is an array of objects of the saved service categories and service defines that were saved by the saveNeeded function above. Iterating through each object in the array and display the category and define for each needed service of that user id currently on state */}
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
