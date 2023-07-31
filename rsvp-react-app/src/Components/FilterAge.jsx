import React, { useState, useEffect } from "react";
import axios from "axios";

function FilterAge() {
  const [age, setAge] = useState(10);

  const [persons, setPersons] = useState([]);

  const getPersons = () => {
    if (age !== null) {
      axios
        .get(`http://localhost:5018/api/rsvpform/filterage?minage=${age}`)
        .then((res) => {
          setPersons(res.data);
        });
    }
  };

  useEffect(() => {
    getPersons();
  }, [age]);

  return (
    <div className="p-3">
      <div className="header bg-black text-white mb-3 p-3 w-full">
        <h2>Filter age</h2>
        <select className="text-black p-3" value={age} name="age" onChange={(e) => setAge(e.target.value)}>
         <option value="10">10</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
        </select>
      </div>
      <div className="table">
        <table  className="w-full table-auto border items-center text-center mt-4">
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
                    <>
                      <tr index={index} className="bg-sky-300">
                        <td className="px-4 py-2">{person.id}</td>
                        <td className="px-4 py-2">{person.firstName}</td>
                        <td className="px-4 py-2">{person.lastName}</td>
                        <td className="px-4 py-2">{person.age}</td>
                        <td className="px-4 py-2">{person.country}</td>
                      </tr>
                    </>
                  ) : (
                    <>
                      <tr index={index} className="bg-red-300">
                        <td className="px-4 py-2">{person.id}</td>
                        <td className="px-4 py-2">{person.firstName}</td>
                        <td className="px-4 py-2">{person.lastName}</td>
                        <td className="px-4 py-2">{person.age}</td>
                        <td className="px-4 py-2">{person.country}</td>
                      </tr>
                    </>
                  )
                )}
              </>
            ) : (
              <div>Persons is empty!</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FilterAge;
