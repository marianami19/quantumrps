import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RoofingCalculator from "./components/RoofingCalculator";
import RoofMeasurementInstructions from "./components/RoofMeasurementInstructions";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";
import DisplayData from "./components/DisplayData";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RoofingCalculator />
      <RoofMeasurementInstructions />
      <UserForm />
      <Footer />

      <BrowserRouter>
        <Routes>
          <Route path="/userlist" element={<DisplayData />} />
          {/* Define more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
