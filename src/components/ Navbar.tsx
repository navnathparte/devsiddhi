import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");
  
  const isHome = location.pathname === "/";
  const isAbout = ["/about"].includes(location.pathname);

  const sections = ["home", "about", "achievements", "post", "projects", "contact"];

  useEffect(() => {
    // Function to check which section is in view for horizontal scroll
    const handleScroll = () => {
      // For horizontal scroll, we check scrollLeft instead of scrollY
      const scrollPosition = document.documentElement.scrollLeft;
      const viewportWidth = window.innerWidth;
      
      // Calculate which section is most visible (0-based index)
      const sectionIndex = Math.floor(scrollPosition / viewportWidth);
      
      // Get the section name based on index, handling edge cases
      const currentSection = sections[Math.min(sectionIndex, sections.length - 1)];
      
      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
        // Update URL hash
        window.history.pushState(null, "", `#${currentSection}`);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("wheel", handleScroll);
    
    // Initial check for active section
    handleScroll();
    
    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  // Handle link click to scroll horizontally to section
  const handleLinkClick = (e:any, sectionId:any) => {
    e.preventDefault();
    
    // Find the index of the section
    const sectionIndex = sections.indexOf(sectionId);
    if (sectionIndex !== -1) {
      // Scroll horizontally to the section
      window.scrollTo({
        left: sectionIndex * window.innerWidth,
        behavior: "smooth"
      });
      
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <div
      className={`${
        isAbout
          ? "bg-[url('/BG-Pattern.png')] bg-cover bg-center bg-no-repeat bg-fixed"
          : ""
      }`}
    >
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent font-bold p-5">
        <div className="flex justify-between items-center">
          {/* LEFT SIDE: Logo */}
          <div className="text-2xl font-bold">
            <a href="/">
              {isHome ? (
                <img src="DevsiddhiLogo.png" alt="Home Logo" className="w-60" />
              ) : (
                <img
                  src="Devsiddhi-Logo-(2).png"
                  alt="Default Logo"
                  className="w-60"
                />
              )}
            </a>
          </div>

          {/* RIGHT SIDE: Navbar Links */}
          <ul className="flex space-x-8 text-[#B68842]">
            {sections.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleLinkClick(e, section)}
                  className={`hover:text-[#D12023] transition-colors ${
                    activeSection === section ? "text-[#D12023] font-extrabold" : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;