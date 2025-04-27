import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = ["/abouts"].includes(location.pathname);

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
            {isHome ? (
              <img src="DevsiddhiLogo.png" alt="Home Logo" className="w-40" />
            ) : (
              <img
                src="Devsiddhi-Logo-(2).png"
                alt="Default Logo"
                className="w-40"
              />
            )}
          </div>

          {/* RIGHT SIDE: Navbar Links */}
          <ul className="flex space-x-8 text-[#B68842]">
            <li>
              <a href="#home" className="hover:text-[#D12023]">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#D12023]">
                About
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:text-[#D12023]">
                Achievements
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#D12023]">
                Projects
              </a>
            </li>
            <li>
              <a href="#post" className="hover:text-[#D12023]">
                Post
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#D12023]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
