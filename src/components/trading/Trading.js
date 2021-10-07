import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./Trading.css";

export default function Trading(props) {
  const [offeredCard, setOfferedCard] = useState([]);

  useEffect(() => {
    axios.get("/trading/offered").then((res) => {
      setOfferedCard(res.data);
    });
  }, []);

  return (
    <div className="trading">
      <h2 className="title">Trading</h2>
      <h3 className="subtitle">See what services others are willing to trade </h3>
      <div className="all_cards">
        {offeredCard.map((obj) => (
          <Card
            key={obj.id}
            service_category={obj.service_category}
            service_define={obj.service_define}
            service_image={obj.service_image}
            user_id={obj.user_id}
            userId={props.userId}
          />
        ))}
      </div>
    </div>
  );
}
