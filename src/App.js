import "./App.css";
import Header from "./Components/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
      <Router basename={process.env.PUBLIC_URL}>
        <Header />
        <Breadcrumb titleCase={titleCase} />
        <Routes>
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
          You can also type a custom url for more Breadcrumb testing but only on localhost
        </em>
      </Router>
    </div>
  );
}

export default App;
