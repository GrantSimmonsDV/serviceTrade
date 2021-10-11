import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Trading.css";

export default function Trading(props) {
  const [offeredCard, setOfferedCard] = useState([]);
  const [allNeeded, setAllNeeded] = useState([]);

  //fire call to get all Needed Services anytime changes are made (rendered)
  //update State with an array of all the Needed Services
  useEffect(() => {
      axios.get("/trading/needed")
      .then((res) => {
         return setAllNeeded(res.data);
      });
  }, []);
//fire call to get all Offered Services anytime changes are made (rendered)
//update the State with an array of all the Offered Services
  useEffect(() => {
    axios.get("/trading/offered")
    .then((res) => {
      setOfferedCard(res.data);
    });
  }, []);


console.log(allNeeded)
  
return (
    <div className="trading">
      <h2 className="title">Trading</h2>
      <h3 className="subtitle">
        See what services others are willing to trade{" "}
      </h3>


      <div className="all_cards">
        {/* Map over the offeredCard array on state, render the Card component and pass down the props for each iteration of an offered service in the array. This will create a Service Card for each offered service in the db to the Trading page */}
        {/* Pass down these values as props desconstructed from the (obj) objects in the offeredCard array on state, other current props on this component, and the allNeeded array on state. */}
        {/* Pass down userId on props again to Card that Trading got from the parent App.js that will help identify whose info is on the card  */}

        {offeredCard.map((obj) => (
          <Card
            key={obj.id}
            service_category={obj.service_category}
            service_define={obj.service_define}
            service_image={obj.service_image}
            user_id={obj.user_id}
            userId={props.userId}
            allNeeded={allNeeded}
          />
        ))}
      </div>
    </div>
  );
}
