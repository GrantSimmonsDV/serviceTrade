import React, { useState } from "react";
import axios from "axios";

export default function ServicesN(props) {
  const [editN, setEditN] = useState(props.service_define);
  const [service_category, setService_Category] = useState(
    props.service_category
  );
  const [service_define, setService_Define] = useState(props.service_define);
  const [service_image, setService_Image] = useState(props.service_image);
  const [categoryOptionN, setCategoryOptionN] = useState(props.service_category)

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
        //Once saved a list of those needed services appear as a list on their profile.
      });
  };

  //*********** DELETE

  const deleteNeededSrv = () => {
    axios.delete(`/profile/needed/delete/${props.id}`).then((res) => {
      props.handleGetN();
      //Once saved a list of those needed services appear as a list on their profile.
    });
  };

  return (
    <div className="ServicesN">
      <select id="neededSelect" onChange={(e) => setCategoryOptionN(props.handleSelect(e)) } value={categoryOptionN}>
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

      <label>Define Service</label>
      <input
        type="text"
        value={editN}
        onChange={(e) => setEditN(e.target.value)}
      />

      <button onClick={updateNeededSrv}>Edit</button>
      <button onClick={deleteNeededSrv}>Delete</button>
    </div>
  );
}
