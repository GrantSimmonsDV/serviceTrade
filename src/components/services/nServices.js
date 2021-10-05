import React from "react";

export default function Services(props) {
  return (
    <div className="Services">
      <select id="neededSelect" onChange={(e) => props.handleSelect(e)}>
        <option disabled selected>
          --Select One--
        </option>
        <option value="yard">Yard</option>
        <option value="ed">Ed</option>
        <option value="auto">Auto</option>
        <option value="pets">Pet</option>
        <option value="goods">Goods</option>
        <option value="home">Home</option>
      </select>

      <label>Define Service</label><input type="text" onChange={(e)=> setService_Define(e.target.value)}/> 
    </div>
  );
}