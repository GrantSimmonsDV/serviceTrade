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
      <h2>Trading comp</h2>

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
  );
}
