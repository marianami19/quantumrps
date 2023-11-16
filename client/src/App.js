import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import AboutUs from "./components/Aboutus";
import UserForm from "./components/UserForm";
import ScrollToTop from "./components/ScrollToTop";
import DisplayData from "./components/DisplayData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop />
      <Header/>
        <Routes>
          <Route path="/userlist" element={<DisplayData />} />
          <Route path="/contact-us" element={<UserForm />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          {/* Define more routes as needed */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
