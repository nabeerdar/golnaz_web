
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Contact from "./Contact";
import Nature from "./Nature";
import City from "./City";
import Flying from "./flying";
import Culture from "./culture";
import Food from "./food";
import Landscape from "./landscape";
import Other from "./other";
import Art from "./components/Art/art";
import Travel from "./Travel";
import ItalyPage from "./components/Travel/ItalyPage";
import FrancePage from "./components/Travel/FrancePage";
import ColnazCV from './assets/GolnazCV.pdf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/italy" element={<ItalyPage />} />
          <Route path="/france" element={<FrancePage />} />
          {/* Route for viewing CV */}
          <Route path="/cv" element={<a href={ColnazCV} target="_blank">View CV</a>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/city" element={<City />} />
          <Route path="/flying" element={<Flying />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/food" element={<Food />} />
          <Route path="/landscape" element={<Landscape />} />
          <Route path="/other" element={<Other />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

