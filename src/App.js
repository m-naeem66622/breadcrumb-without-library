import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Breadcrumb from "./Components/Breadcrumb";
import DynamicRoute from "./Components/DynamicRoute";

function App() {
  const titleCase = (string) => {
    return string
      .split("-")
      .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
      .join(" ");
  };
  return (
    <div className="App">
      <Router>
        <Header />
        <Breadcrumb titleCase={titleCase} />
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/" element={<DynamicRoute titleCase={titleCase} />} />
          <Route
            path="/:param1"
            element={<DynamicRoute titleCase={titleCase} />}
          />
          <Route
            path="/:param1/:param2"
            element={<DynamicRoute titleCase={titleCase} />}
          />
          <Route
            path="/:param1/:param2/:param3"
            element={<DynamicRoute titleCase={titleCase} />}
          />
        </Routes>

        <em className="note">
          You can also type a custom url for more Breadcrumb testing
        </em>
      </Router>
    </div>
  );
}

export default App;
