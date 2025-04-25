import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ContactUs from "./pages/ContactUs";
import Post from "./pages/Post";
import Upcoming from "./pages/Upcoming";
import CustomScrollbar from "./components/CustomScrollbar";
import Portfolio from "./pages/Completed";
import Achievements from "./pages/Achievements";
import ProfessorsSection from "./components/ProfessorsSection";

function App() {
  const location = useLocation();

  return (
    <div className="relative">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/director" element={<ProfessorsSection />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/portfolio-upcoming" element={<Upcoming />} />
          <Route path="/portfolio-completed" element={<Portfolio />} />
          <Route path="/post" element={<Post />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
      <CustomScrollbar />
    </div>
  );
}

export default App;
