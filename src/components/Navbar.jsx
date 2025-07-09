import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Button from "./button";

const navLinks = [
  { title: "হোম", path: "/" },
  { title: "আমাদের সম্পর্কে", path: "/about" },
  { title: "বৈশিষ্ট্য", path: "/features" },
  { title: "সহায়তা", path: "/faq" },
];

const WaveLines = () => (
  <div className="flex items-center gap-1 h-8 scale-90">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className={`w-1 bg-white rounded transition-all wave-line wave-line-${
          i + 1
        }`}
      />
    ))}
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-brand-500 p-4 md:rounded-t-2xl lg:rounded-t-3xl ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl flex items-center justify-center gap-2">
          <a href="/">মন তরঙ্গ </a>
          <WaveLines />
        </div>
        <div className="hidden bg-light-400 md:flex space-x-4 p-2.5 rounded-[18px]">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              className={({ isActive }) =>
                twMerge(
                  clsx(
                    `text-white hover:text-gray-200 px-3 py-2 rounded-xl text-sm font-medium  transition-all duration-200`,
                    isActive && "bg-white text-black px-8 hover:text-black"
                  )
                )
              }
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
          <Button variant="secondary" icon iconPosition="right" size="md">
            নিবন্ধন করুন
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 ">
          <div className="flex flex-col space-y-2 justify-center items-center bg-light-400 p-10 rounded-[18px]">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  twMerge(
                    clsx(
                      `text-white hover:text-gray-200 px-3 py-2 rounded-xl text-sm font-medium w-fit transition-all duration-200`,
                      isActive && "bg-white text-black px-4 hover:text-black"
                    )
                  )
                }
              >
                {link.title}
              </NavLink>
            ))}
            <Button variant="secondary" className=" w-fit mt-2">
              নিবন্ধন করুন
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
