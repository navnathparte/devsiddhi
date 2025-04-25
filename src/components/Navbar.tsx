import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isAbout = ["/abouts"].includes(location.pathname);

  // Add an array of nav items
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Achievements", to: "/achievements" },
    { label: "Portfolio", to: "/portfolio-upcoming" },
    { label: "Post", to: "/post" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  return (
    <div
      className={`${
        isAbout
          ? "bg-[url('/BG-Pattern.png')] bg-cover bg-center bg-no-repeat bg-fixed"
          : ""
      }`}
    >
      <nav className="sticky top-0 left-0 lg:top-auto z-50 w-full bg-transparent font-bold p-5">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">
            <Link to="/">
              {isHome ? (
                <img src="DevsiddhiLogo.png" alt="Home Logo" className="w-65" />
              ) : (
                <img
                  src="Devsiddhi-Logo-(2).png"
                  alt="Default Logo"
                  className="w-65"
                />
              )}
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
            <span className="text-2xl">☰</span>
          </button>

          <ul
            className={`lg:flex lg:space-x-8 space-y-4 lg:space-y-0 mt-4 lg:mt-0 text-[#B68842] ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`hover:text-[#D12023] ${
                    location.pathname === item.to ? "text-[#D12023]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}
