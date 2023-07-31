import React, { useState, useEffect } from "react";
import axios from "axios";

function GetWithCountry() {
  const [country, setCountry] = useState("Turkey");

  const [persons, setPersons] = useState([]);

  const getPersons = () => {
    axios
      .get(`http://localhost:5018/api/rsvpform/country?country=${country}`)
      .then((res) => {
        setPersons(res.data);
        console.log(res.data);
      });
  };
  useEffect(() => {
    getPersons();
    console.log(country);
  }, [country]);

  return (
    <>
      <div>Get Person With Country</div>
      <select
        onChange={(val) => setCountry(val.target.value)}
        value={country}
        name="country"
      >
        <option value="Turkey">Turkey</option>
        <option value="United States">United States</option>
        <option value="United Kingdom">United Kingdom</option>
      </select>

      <table className="w-full table-auto border items-center text-center mt-4">
        <thead>
          <tr className="bg-violet-600 text-white">
            <th className="px-4 py-2">Id</th>
            <th className="px-4 py-2">FirstName</th>
            <th className="px-4 py-2">LastName</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Country</th>
          </tr>
        </thead>
        <tbody>
          {persons.length > 0 ? (
            <>
              {persons.map((person, index) =>
                person.isComing === true ? (
                  <tr className="bg-sky-500 text-white">
                    {/* <div>Coming !</div> */}
                    <td className="px-4 py-2">{person.id}</td>
                    <td className="px-4 py-2">{person.firstName}</td>
                    <td className="px-4 py-2">{person.lastName}</td>
                    <td className="px-4 py-2">{person.age}</td>
                    <td className="px-4 py-2">{person.country}</td>
                  </tr>
                ) : (
                  <tr className="bg-red-500 text-white">
                    {/* <div>Coming !</div> */}
                    <td className="px-4 py-2">{person.id}</td>
                    <td className="px-4 py-2">{person.firstName}</td>
                    <td className="px-4 py-2">{person.lastName}</td>
                    <td className="px-4 py-2">{person.age}</td>
                    <td className="px-4 py-2">{person.country}</td>
                  </tr>
                )
              )}
            </>
          ) : (
            <div>Choose Country</div>
          )}
        </tbody>
      </table>
    </>
  );
}

export default GetWithCountry;
