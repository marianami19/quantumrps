import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import RoofingCalculator from "./components/RoofingCalculator";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <RoofingCalculator />
      <ContactSection />
    </div>
  );
}

export default App;
