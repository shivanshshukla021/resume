import "./App.css";
import About from "./components/About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import CodingCertification from "./components/CodingCertification";
import Education from "./components/Education";
import CruserAnimal from "./components/CruserAnimal";
import CruserLiveNews from "./components/CruserLiveNews";
import CruserWhatsapp from "./components/CruserWhatsapp";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/project" element={<Project />} />
          <Route exact path="/coding" element={<CodingCertification />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/animal" element={<CruserAnimal />} />
          <Route exact path="/livenews" element={<CruserLiveNews />} />
          <Route exact path="/whatsapp" element={<CruserWhatsapp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
