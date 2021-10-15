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

  //Select the service category from dropdown and save selected index to State.
  const handleSelect = (e) => {
    const output = e.target[e.target.selectedIndex].value;
    setService_Category(output);
  };

  //Take entered text value and save it to State.
  const defineService = (e) => setService_Define(e.target.value);

  // -- e (event) passed in to be set to state --
  const handleOffered = async (e) => await setOffered(e);
  const handleNeeded = async (e) => await setNeeded(e);

  //update profile data
  const handleClick = (e) => {
    axios
      .put(`/profile/${props.userId}`, { full_name, profile_pic, city, state })
      .then((res) => {
        alert("Profile saved");
        //Once saved turning the input into texts on their profile
      });
  };

  //Function passed down as props. Handles deleting offered and needed services on the ServiceN and ServiceO components.
  // Note: kept functions in this component becuase their states were in this one already.
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
      <h2 className="title">Profile</h2>
      <div className="site_orient">
        <div className="profile_fields">
          <img src="profile-silhouette.jpeg" id="photo" />
          <input
            type="file"
            id="file"
            alt="Profile Picture"
            placeholder=""
            src={profile_pic}
            onChange={(e) => setProfile_Pic(e.target.value)}
          />

          <input
            type="text"
            placeholder="Full Name"
            value={full_name}
            onChange={(e) => setFull_Name(e.target.value)}
          />

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="text"
            placeholder="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />

          <button onClick={handleClick} className="save_profileBtn">
            Save
          </button>
        </div>
        <div className="services_O_N">
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
          <h4>Add an offered service</h4>
          <select id="offerSelect" onChange={(e) => handleSelect(e)}>
            <option disabled selected>
              --Select Category--
            </option>
            <option value="Yard">Yard</option>
            <option value="Ed">Ed</option>
            <option value="Auto">Auto</option>
            <option value="Pets">Pet</option>
            <option value="Food">Food</option>
            <option value="Home">Home</option>
          </select>

          <input placeholder="Specifics" type="text" onChange={defineService} />

          <button onClick={intialOfferedSrv} className="save_offeredBtn">
            Save
          </button>

          {/* ********NEEDED SERVICES */}

          <h2 className="need_title">Needed Services</h2>

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
          <h4>Add an needed service</h4>
          <select id="needSelect" onChange={(e) => handleSelect(e)}>
            <option disabled selected>
              --Select Category--
            </option>
            <option value="Yard">Yard</option>
            <option value="Ed">Ed</option>
            <option value="Auto">Auto</option>
            <option value="Pets">Pet</option>
            <option value="Food">Food</option>
            <option value="Home">Home</option>
          </select>

          <input placeholder="Specifics" type="text" onChange={defineService} />

          <button onClick={initialNeededSrv} className="save_neededBtn">
            Save
          </button>
        </div>
      </div>
      <br />
      {/* <button onClick={deleteAccount} className="delete_accountBtn">
        Delete Account
      </button> */}
    </div>
  );
}

// (document.querySelector("#offerSelect").options)
