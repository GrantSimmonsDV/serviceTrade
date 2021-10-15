import React, { useState } from "react";
import axios from "axios";
import "./Services.css";

export default function ServicesN(props) {
  const [editN, setEditN] = useState(props.service_define);
  const [service_category, setService_Category] = useState(
    props.service_category
  );
  const [service_define, setService_Define] = useState(props.service_define);
  const [service_image, setService_Image] = useState(props.service_image);
  const [categoryOptionN, setCategoryOptionN] = useState(
    props.service_category
  );

  //Function updates needed service by its unique id. It then is saved to state by handleNeeded function on the Profile component.
  const updateNeededSrv = () => {
    axios
      .put(`/profile/needed/update/${props.id}`, {
        service_category,
        service_define,
        service_image,
      })
      .then((res) => {
        props.handleNeeded(res.data);
        alert("Services updated");
      });
  };

  //*********** DELETE

  //Function deletes needed service by its unique id. It then is saved to state by handleGetN function on the Profile component.
  const deleteNeededSrv = () => {
    axios.delete(`/profile/needed/delete/${props.id}`).then((res) => {
      props.handleGetN();
    });
  };

  return (
    <div className="ServicesN">
      <h4>Saved needed service</h4>
      <select
        id="neededSelect"
        // onChange takes the event updates state with handleSelect from Profile and then sets the value to be what is state now.
        onChange={(e) => setCategoryOptionN(props.handleSelect(e))}
        value={categoryOptionN}
      >
        <option disabled selected>
          --Select One--
        </option>
        <option value="Yard">Yard</option>
        <option value="Ed">Ed</option>
        <option value="Auto">Auto</option>
        <option value="Pets">Pet</option>
        <option value="Food">Food</option>
        <option value="Home">Home</option>
      </select>
      {/* 
      <label>Define Service</label> */}
      <input
        type="text"
        value={editN}
        //onChange takes event and uses entered value to update state from what its been.
        onChange={(e) => setEditN(e.target.value)}
      />

      <button className="edit-button" onClick={updateNeededSrv}>
        Edit
      </button>
      <button className="delete-button" onClick={deleteNeededSrv}>
        Delete
      </button>
    </div>
  );
}
