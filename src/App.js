import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import ProductsSection from "./sections/ProductsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-content transition-colors duration-200">
      <Navbar />

      <main>
        <HeroSection />
        <ProductsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
