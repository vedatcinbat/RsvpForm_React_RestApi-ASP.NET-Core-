import React, { useState, useEffect } from "react";
import axios from "axios";
function RsvpForm() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [age, setAge] = useState();
  const [country, setCountry] = useState();
  const [isComing, setIsComing] = useState(true);

  const addRsvp = (e) => {
    e.preventDefault();

    const formData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      country: country,
      isComing: isComing,
    };

    console.log(formData);


    axios
      .post("http://localhost:5018/api/rsvpform", formData)
      .then(function (response) {
        console.log(response);
        console.log(formData);
        alert("Your data hase been saved !" + formData.firstName + " " + formData.lastName);
      });
  };



  return (
    <div className="m-2">
      <div>RSVP FORM</div>
      <div className="form flex flex-col  w-[10rem]">
        <input
          onChange={(e) => setFirstName(e.target.value)}
          className="p-2 bg-black text-white"
          type="text"
          placeholder="FirstName..."
        />
        <input
          onChange={(e) => setLastName(e.target.value)}
          className="p-2 bg-black text-white"
          type="text"
          placeholder="LastName..."
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          className="p-2 bg-black text-white"
          type="text"
          placeholder="Age..."
        />
        <input
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 bg-black text-white"
          type="text"
          placeholder="Country..."
        />
        <select name="isComing" value={isComing} onChange={(e) => setIsComing(e.target.value === "true")} className="p-2">
          <option value={true}>Yes, I'll come</option>
          <option value={false}>No, I won't come</option>
        </select>
        <button className="bg-red-800 text-white p-3" onClick={addRsvp}>
          Add Rsvp
        </button>
      </div>
    </div>
  );
}

export default RsvpForm;
