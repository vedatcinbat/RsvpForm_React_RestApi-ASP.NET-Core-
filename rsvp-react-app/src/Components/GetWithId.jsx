import React, { useState, useEffect } from "react";
import axios from "axios";

function GetWithId() {
  const [currentId, setCurrentId] = useState(0);
  const [personInfo, setPersonInfo] = useState([]);

  const tryToGetPerson = () => {
    {
      currentId === null ? (
        <div>
          <div>currentId is null !!!</div>
        </div>
      ) : (
        axios
          .get(`http://localhost:5018/api/rsvpform/${currentId}`)
          .then((res) => {
            setPersonInfo(res.data);
          })
      );
    }
  };

  useEffect(() => {
    tryToGetPerson();
    console.log(currentId);
    console.log(personInfo);
  }, [currentId]);

  return (
    <>
      <div>Get Person With Id</div>
      <input
        onChange={(e) => setCurrentId(e.target.value)}
        type="text"
        placeholder="Enter Id For Checking"
        className="p-2 bg-slate-800 text-white p-4"
      />

      {personInfo.length !== null ? (
        (personInfo.isComing === true) ? (
          <div className="bg-sky-300">
            <div>Coming !</div>
            <div>Id : {personInfo.id}</div>
            <div>FirstName : {personInfo.firstName}</div>
            <div>LastName : {personInfo.lastName}</div>
            <div>Age : {personInfo.age}</div>
            <div>Country : {personInfo.country}</div>
            
          </div>
        ) : (
          (personInfo.isComing === false) ? (
            <div className="bg-red-300">
            <div>Not Coming</div>
            <div>{personInfo.id}</div>
            <div>{personInfo.firstName}</div>
            <div>{personInfo.lastName}</div>
            <div>{personInfo.age}</div>
            <div>{personInfo.country}</div>
            
          </div>
          ) : (
            <></>
          )
        )
      ) : (
        <p>There is no such data</p>
      )}
    </>
  );
}

export default GetWithId;
