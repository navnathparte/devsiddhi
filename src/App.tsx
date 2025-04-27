import Navbar from "./components/ Navbar";
import Section from "./components/Section";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import ProfessorsSection from "./pages/ProfessorsSection";
import Achievements from "./pages/Achievements";
import Post from "./pages/Post";
import Upcoming from "./pages/Upcoming";

function App() {
  return (
    <div className="overflow-x-scroll flex snap-x snap-mandatory w-[800vw] h-screen">
      <Navbar />

      <Section id="home" title="Home">
        <Home />
      </Section>

      <Section id="about" title="About" bgImage="/BG-Pattern.png">
        <About />
      </Section>

      <Section id="about-professors" title="Professors" bgImage="/Completed-Projects.jpg">
        <ProfessorsSection />
      </Section>

      <Section id="achievements" title="Achievements">
        <Achievements />
      </Section>

      <Section id="post" title="Post" bgImage="/blurred.jpg">
        <Post />
      </Section>

      <Section id="projects" title="Projects" bgImage="/Completed-Projects.jpg">
        <Projects />
      </Section>

      {/* Changed to projects-upcoming */}
      <Section id="projects" title="Upcoming Projects" bgImage="/OngoingProjects.jpg">
        <Upcoming />
      </Section>

      <Section id="contact" title="Contact Us" bgImage="/city.jpg">
        <ContactUs />
      </Section>
    </div>
  );
}

export default App;