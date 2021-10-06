import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  const [allNeededByUser, setAllNeedByUser] = useState([]);

  let user_id = props.user_id;

  useEffect(() => {
    function cardNeeded() {
      axios.get(`/trading/needed/${user_id}`).then((res) => {
        console.log(res.data, "res.data info")
        return setAllNeedByUser(res.data);
      }); 
    };
   return () => {cardNeeded()};
  }, []);


  const createAChat = () => {
    axios.post("/trading", {
      user_id_1: props.userId,
      user_id_2: props.user_id
    }).then((res) => {
    });
  };


console.log(allNeededByUser, "array info")

  return (
    <div className="trading">
      <div className="match_card">
        <h3>Offered</h3>
        <p>
          {props.service_category}: {props.service_define}
        </p>
        <h3>Needed</h3>
        {allNeededByUser.map((obj) => (
          <p key={obj.id}>
            {obj.service_category}: {obj.service_define}
          </p>
        ))}
        <button onClick={createAChat}>Chat</button>
      </div>
    </div>
  );
}
