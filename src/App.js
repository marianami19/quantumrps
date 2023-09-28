// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
// import AboutSection from "./components/AboutSection";
// import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import RoofingCalculator from "./components/RoofingCalculator";
import RoofMeasurementInstructions from "./components/RoofMeasurementInstructions";
import UserForm from "./components/UserForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <HeroSection />
      {/* <AboutSection />
      <GallerySection /> */}
      <RoofingCalculator />
      <RoofMeasurementInstructions />
      <UserForm />
      {/* <ContactSection /> */}
      <Footer />
    </div>
  );
}

export default App;
