import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <nav className="navigationBar flex justify-center gap-4 m-2 p-2 bg-purple-900 text-white">
        <li className="bg-sky-200 text-black p-2 rounded-lg cursor-pointer list-none">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-sky-200 text-black p-2 rounded-lg cursor-pointer list-none">
          <Link to="/rsvpform">Rsvp Now</Link>
        </li>
        <li className="bg-sky-200 text-black p-2 rounded-lg cursor-pointer list-none">
          <Link to="/candidatelist">Candidates</Link>
        </li>
        <li className="bg-sky-200 text-black p-2 rounded-lg cursor-pointer list-none">
          <Link to="/getwithid">GetWithId</Link>
        </li>
        <li className="bg-sky-200 text-black p-2 rounded-lg cursor-pointer list-none">
          <Link to="/getwithcountry">GetWithCountry</Link>
        </li>
        <li className="bg-sky-200 text-black p-2 rounded-lg cursor-pointer list-none">
          <Link to="/filterage">Filter Age</Link>
        </li>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
