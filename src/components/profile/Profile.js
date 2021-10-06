//Profile
//Display information and skills of the user.
// Access to Navbar
//Router Links #23
// User can add profile picture
// Can type in name
// Can type in city
// Can select offered services by given categories (4)
// Can select needed services by given categories (4)
// Can type in specific skills for selected offered services category
// Can type in specific skills for selected needed services category
// Can check box to notify they're flexible on trades
// User can click Save for profile input
// PUT request to create user's profile data in database
// User can update profile and click Save Changes
//PUT request to update profile data

import React, { useState, useEffect } from "react";
import axios from "axios";
import ServicesO from "../services/ServicesO";
import ServicesN from "../services/ServicesN";
import "./Profile.css";

export default function Profile(props) {
  const [full_name, setFull_Name] = useState("");
  const [profile_pic, setProfile_Pic] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [service_category, setService_Category] = useState("");
  const [service_define, setService_Define] = useState("");
  const [service_image, setService_Image] = useState(20);
  const [offered, setOffered] = useState([]);
  const [needed, setNeeded] = useState([]);

  const handleSelect = (e) => {
    const output = e.target[e.target.selectedIndex].value;
    setService_Category(output);
  };

  const defineService = (e) => setService_Define(e.target.value);

  const handleOffered = async (e) => await setOffered(e);
  const handleNeeded = async (e) => await setNeeded(e);

  const handleClick = (e) => {
    //update profile data
    axios
      .put(`/profile/${props.userId}`, { full_name, profile_pic, city, state })
      .then((res) => {
        alert("Profile saved");
        //Once saved turning the input into texts on their profile
      });
  };

  const handleGetO = () => {
    axios.get(`/profile/offered/${props.userId}`).then((res) => {
      setOffered(res.data);
    });
  };
  const handleGetN = () => {
    axios.get(`/profile/needed/${props.userId}`).then((res) => {
      setNeeded(res.data);
    });
  };

  useEffect(() => {
    handleGetO();
  }, []);

  useEffect(() => {
    handleGetN();
  }, []);

  //*********** CREATE

  const intialOfferedSrv = () => {
    axios
      .post(`/profile/offered/${props.userId}`, {
        service_category,
        service_define,
        service_image,
      })
      .then((res) => {
        setOffered(res.data);
        alert("Offered service added");
        //Once saved a list of those offered services appear as a list on their profile.
      });
  };

  const initialNeededSrv = () => {
    axios
      .post(`/profile/needed/${props.userId}`, {
        service_category,
        service_define,
        service_image,
      })
      .then((res) => {
        setNeeded(res.data);
        alert("Need service added");
        //Once saved a list of those needed services appear as a list on their profile.
      });
  };

  //*********** DELETE ACCOUNT
  const deleteAccount = () => {
    axios.delete("/profile/:id").then((res) => {});
  };

  return (
    <div className="profile">
      <h2>Profile comp</h2>

      <label id="uploadBtn">
        <img src="profile-silhouette.jpeg" id="photo" />
        <input
          type="file"
          id="file"
          alt="Profile Picture"
          src={profile_pic}
          onChange={(e) => setProfile_Pic(e.target.value)}
        />
      </label>

      <label>
        Full Name
        <input
          type="text"
          value={full_name}
          onChange={(e) => setFull_Name(e.target.value)}
        />
      </label>

      <label>
        City
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        State
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </label>
      <button onClick={handleClick} className="save_profileBtn">
        Save Profile
      </button>
      <h2>Offered Services</h2>

      {console.log(offered)}

      {offered.map((obj) => (
        <ServicesO
          key={obj.id}
          id={obj.id}
          user_id={obj.user_id}
          service_category={obj.service_category}
          service_define={obj.service_define}
          service_image={obj.service_image}
          handleOffered={handleOffered}
          handleGetO={handleGetO}
          handleSelect={handleSelect}
        />
      ))}

      {/* ************OFFERED SERVICES */}

      <select id="offerSelect" onChange={(e) => handleSelect(e)}>
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
      <input type="text" onChange={defineService} />

      <button onClick={intialOfferedSrv} className="save_offeredBtn">
        Save
      </button>

      {/* ********NEEDED SERVICES */}

      <h2>Needed Services</h2>

      {needed.map((obj) => (
        <ServicesN
          key={obj.id}
          id={obj.id}
          user_id={obj.user_id}
          service_category={obj.service_category}
          service_define={obj.service_define}
          service_image={obj.service_image}
          handleNeeded={handleNeeded}
          handleGetN={handleGetN}
          handleSelect={handleSelect}
        />
      ))}

      <select id="needSelect" onChange={(e) => handleSelect(e)}>
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
      <input type="text" onChange={defineService} />

      <button onClick={initialNeededSrv} className="save_neededBtn">
        Save
      </button>

      <br />
      <button onClick={deleteAccount} className="delete_accountBtn">
        Delete Account
      </button>
    </div>
  );
}

// (document.querySelector("#offerSelect").options)
