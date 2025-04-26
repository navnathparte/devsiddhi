import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import About from "./pages/About";
import ProfessorsSection from "./components/ProfessorsSection";
import Achievements from "./pages/Achievements";
import Upcoming from "./pages/Upcoming";
import Completed from "./pages/Completed";
import Post from "./pages/Post";
import ContactSplit from "./pages/ContactUs";

function App() {
  const location = useLocation();

  return (
    <div className="relative">
      <Navbar />

      <Section id="/" title="Home">
        <Home />
      </Section>

      <Section id="about" title="About">
        <About />
      </Section>

      <Section id="director" title="Director">
        <ProfessorsSection />
      </Section>

      <Section id="achievements" title="Achievements">
        <Achievements />
      </Section>

      <Section id="portfolio-upcoming" title="Upcoming Projects">
        <Upcoming />
      </Section>

      <Section id="portfolio-upcoming" title="Upcoming Projects">
        <Completed />
      </Section>

      <Section id="post" title="Post">
        <Post />
      </Section>

      <Section id="contact-us" title="Contact Us">
        <ContactSplit />
      </Section>
    </div>
  );
}

export default App;
