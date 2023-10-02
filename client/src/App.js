import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import RoofingCalculator from "./components/RoofingCalculator";
import RoofMeasurementInstructions from "./components/RoofMeasurementInstructions";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RoofingCalculator />
      <RoofMeasurementInstructions />
      <UserForm />
      <Footer />
    </div>
  );
}

export default App;
