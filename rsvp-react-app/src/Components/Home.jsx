import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="p-2">
      <div className="bg-sky-700 text-white w-full h-[12rem] p-2 flex flex-col align-center items-center p-2 justify-center">
        <div className="text-3xl">Welcome to the RSVP FORM</div>
        <div className="text-xl mt-2">RSVP SYSTEM</div>
        <div className="bg-black flex mt-4">
          <li className="list-none p-2 mr-[1rem] bg-red-400 text-white">
            <Link to="rsvpform">RsvpForm</Link>
          </li>
          <li className="list-none p-2 bg-red-400 text-white">
            <Link to="candidatelist">Candidates</Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Home;
