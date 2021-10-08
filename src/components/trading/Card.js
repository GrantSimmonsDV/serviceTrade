import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trading.css";

export default function Card(props) {
  const [saveAllNeeded, setSaveAllNeeded] = useState([]);
  const [allNeeded, setAllNeeded] = useState(props.allNeeded);
  

  // Function that creates a chat and --deconstructs both user ids invovles and send the user to the Chat page once they click the create chat button.
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
  
  // Function takes the array of allNeeded on state and --iterates through each of the objects in that allNeeded array and evaluates the user id from the object being currently iterated over and the user id from ?? props ??. If those user ids match then save to state these two values off the current object of all needed services of that user with a spread opperator. 
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
      {/* -- This is displaying the service category and define of the user ?? */}
            <p>
        {props.service_category}: {props.service_define}
      </p>
      <h3>Needing</h3>
      {/* This is mapping over saveAllNeeded that is an array of objects of the saved service categories and defines that were saved by the saveNeeded function above. Iterating through each object in the array display the category and define for each needed service of that ??user id */}
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
