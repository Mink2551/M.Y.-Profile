import React, { useState, useEffect } from "react";
import { faBars, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className={`bg-white text-xl mx-auto py-2 rounded-full w-3/5 flex sticky top-2 shadow-xl z-50 transition-all ${
        isVisible ? "opacity-100" : "opacity-0 -translate-y-full"
      }`}
    >
      <a href="#target-element" className="flex items-center">
        <button className="transition-all hover:bg-blue-200 hover:bg-opacity-20 ml-1 text-md font-extrabold p-2 px-3 rounded-2xl">
          <div className="hover:underline">
            M.Y. Profile
            <FontAwesomeIcon
              className={`ml-2 ${isVisible ? "opacity-100" : "opacity-0"} transition-all`}
              icon={faPaw}
            />
          </div>
        </button>
      </a>

      <div className="absolute right-0 top-[-100%] md:top-[10%] md:opacity-100 opacity-0 items-center px-5">
        <ul className="flex mr-1 md:gap-4 gap-6">
          <li className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
            <a href="/">About</a>
          </li>
          <li className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
            <a href="/talent">Talent</a>
          </li>
          <li className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
            <a href="/experience">Experience</a>
          </li>
          <li className=" text-sm font-medium my-3 transition-all hover:scale-125 hover:underline text-gray-400 hover:text-gray-600">
            <a href="/portfolio">Portfolio</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center mx-auto md:hidden cursor-pointer text-2xl">
        <details className="dropdown ">
          <summary className="  text-white">
            <FontAwesomeIcon className="text-black" icon={faBars} />
          </summary>
          <ul className="p-2 shadow mt-4 menu dropdown-content z-[1] bg-base-100 ml-5 rounded-box w-32">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/talent">Talent</a>
            </li>
            <li>
              <a href="/experience">Experience</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
