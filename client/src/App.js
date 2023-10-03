import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import DisplayData from "./components/DisplayData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<DisplayData />} />
          <Route path="/" element={<Home />} />
          {/* Define more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
