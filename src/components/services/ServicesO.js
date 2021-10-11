import React, { useState } from "react";
import axios from "axios";
import "./Services.css";

export default function ServicesO(props) {
  const [editO, setEditO] = useState(props.service_define);
  const [service_category, setService_Category] = useState(
    props.service_category
  );
  const [service_define, setService_Define] = useState(props.service_define);
  const [service_image, setService_Image] = useState(props.service_image);

  const [categoryOptionO, setCategoryOptionO] = useState(
    props.service_category
  );

  //*********** UPDATE

  //Function updates needed service by its unique id. It then is saved to state by handleOffered function on the Profile component.
  const updateOfferedSrv = () => {
    axios
      .put(`/profile/offered/update/${props.id}`, {
        service_category,
        service_define,
        service_image,
      })
      .then((res) => {
        props.handleOffered(res.data);
        alert("Services updated");
      });
  };

  //Function deletes needed service by its unique id. It then is saved to state by handleGetO function on the Profile component.
  const deleteOfferedSrv = () => {
    axios.delete(`/profile/offered/delete/${props.id}`).then((res) => {
      props.handleGetO();
    });
  };

  return (
    <div className="ServicesO">
      <h4>Saved offered service</h4>
      <select
        id="offeredSelect"
        // onChange takes the event updates state with handleSelect from Profile and then sets the value to be what is state now.
        onChange={(e) => setCategoryOptionO(props.handleSelect(e))}
        value={categoryOptionO}
      >
        <option disabled selected>
          --Select One--
        </option>
        <option value="Yard">Yard</option>
        <option value="ed">Ed</option>
        <option value="auto">Auto</option>
        <option value="pets">Pet</option>
        <option value="goods">Goods</option>
        <option value="home">Home</option>
      </select>

      {/* <label>Define Service</label> */}
      <input
        type="text"
        value={editO}
        //onChange takes event and uses entered value to update state from what its been.
        onChange={(e) => setEditO(e.target.value)}
      />

      <button className="edit-button" onClick={updateOfferedSrv}>
        Edit
      </button>
      <button className="delete-button" onClick={deleteOfferedSrv}>
        Delete
      </button>
    </div>
  );
}
