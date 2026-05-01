import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import InstagramFeed from "./components/InstagramFeed";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <About />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </>
  );
}
