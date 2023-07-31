import Home from "./Components/Home";
import Layout from "./Components/Layout";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RsvpForm from "./Components/RsvpForm";
import CandidateList from "./Components/CandidateList";
import GetWithId from "./Components/GetWithId";
import GetWithCountry from "./Components/GetWithCountry";
import FilterAge from "./Components/FilterAge";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rsvpform" element={<RsvpForm />} />
            <Route path="candidatelist" element={<CandidateList />} />
            <Route path="getwithid" element={<GetWithId />} />
            <Route path="getwithcountry" element={<GetWithCountry />} />
            <Route path="filterage" element={<FilterAge />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
