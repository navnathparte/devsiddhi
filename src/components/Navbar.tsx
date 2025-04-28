import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Define types for our mappings
type SectionId =
  | "home"
  | "about"
  | "about-professors"
  | "achievements"
  | "post"
  | "projects"
  | "projects-upcoming"
  | "contact";
type NavbarItem =
  | "home"
  | "about"
  | "achievements"
  | "post"
  | "projects"
  | "contact";

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<NavbarItem>("home");
  const [currentSectionId, setCurrentSectionId] = useState<SectionId>("home");
  const [currentRoute, setCurrentRoute] = useState("Home");

  const navbarMapping: Record<SectionId, NavbarItem> = {
    home: "home",
    about: "about",
    "about-professors": "about",
    achievements: "achievements",
    post: "post",
    projects: "projects",
    "projects-upcoming": "projects",
    contact: "contact",
  };

  const routeNames: Record<SectionId, string> = {
    home: "Home",
    about: "About",
    "about-professors": "Directors",
    achievements: "Achievements",
    post: "Post",
    projects: "Completed Projects",
    "projects-upcoming": "Upcoming Projects",
    contact: "Contact Us",
  };

  const allSections: SectionId[] = [
    "home",
    "about",
    "about-professors",
    "achievements",
    "post",
    "projects",
    "projects-upcoming",
    "contact",
  ];

  const navbarItems: NavbarItem[] = [
    "home",
    "about",
    "achievements",
    "post",
    "projects",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollLeft;
      const viewportWidth = window.innerWidth;

      const sectionIndex = Math.floor(scrollPosition / viewportWidth);

      const sectionId =
        allSections[Math.min(sectionIndex, allSections.length - 1)];

      if (sectionId) {
        setCurrentSectionId(sectionId);

        const navbarItem = navbarMapping[sectionId];

        if (navbarItem !== activeSection) {
          setActiveSection(navbarItem);
        }

        setCurrentRoute(routeNames[sectionId]);

        window.history.pushState(null, "", `#${sectionId}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("wheel", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleScroll);
    };
  }, [activeSection]);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    navItemId: NavbarItem
  ) => {
    e.preventDefault();

    const targetSectionId = allSections.find(
      (section) => navbarMapping[section] === navItemId
    );

    if (targetSectionId) {
      const sectionIndex = allSections.indexOf(targetSectionId);

      if (sectionIndex !== -1) {
        window.scrollTo({
          left: sectionIndex * window.innerWidth,
          behavior: "smooth",
        });

        setActiveSection(navItemId);
        setCurrentSectionId(targetSectionId);
        setCurrentRoute(routeNames[targetSectionId]);
        window.history.pushState(null, "", `#${targetSectionId}`);
      }
    }
  };

  const isHomeSection = currentSectionId === "home";

  return (
    <div
      className={`${
        currentSectionId === "about"
          ? "bg-[url('/BG-Pattern.png')] bg-cover bg-center bg-no-repeat bg-fixed"
          : ""
      }`}
    >
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent font-bold p-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold flex items-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
              {isHomeSection ? (
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

          <ul className="flex space-x-8 text-[#B68842]">
            {navbarItems.map((navItem) => (
              <li key={navItem}>
                <a
                  href={`#${navItem}`}
                  onClick={(e) => handleLinkClick(e, navItem)}
                  className={`hover:text-[#D12023] transition-colors ${
                    activeSection === navItem
                      ? "text-[#D12023] font-extrabold"
                      : ""
                  }`}
                >
                  {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
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
