import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import DisplayData from "./components/DisplayData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<DisplayData />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          {/* Define more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
