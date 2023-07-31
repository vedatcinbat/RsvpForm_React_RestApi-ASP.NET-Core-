import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
// http://localhost:5018/api/rsvpform

function CandidateList() {
  const [persons, setPersons] = useState([]);

  const fetchPersons = () => {
    fetch("http://localhost:5018/api/rsvpform")
      .then((res) => res.json())
      .then((data) => {
        setPersons(data);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <>
      <div>
        <h2>All Candidates</h2>

        <table className="table w-[50rem] items-center text-center table-fixed border-separate border-spacing-2 bg-slate-800 text-white border border-slate-500">
          <thead className="bg-slate-300 text-black">
            <tr>
              <th className="">Id</th>
              <th className="">FirstName</th>
              <th className="">LastName</th>
              <th className="">Age</th>
              <th className="">Country</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((person, index) => {
              return (
                <tr key={index} index={index}>
                  <td>{person.id}</td>
                  <td>{person.firstName}</td>
                  <td>{person.lastName}</td>
                  <td>{person.age}</td>
                  <td>{person.country}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CandidateList;
