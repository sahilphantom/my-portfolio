import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-[#000] border-solid border-b-[1px] border-[#915EFF]" : "bg-[#000] border-solid border-b-[1px] border-[#915EFF] "
      }`}
    >
      <div className='w-[90%] flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          <p className='text-white text-[22px] font-bold cursor-pointer flex '>
            Sahil
            <span className='sm:block hidden text-[#915EFF]'>.Dev </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
  <img
    src={toggle ? close : menu}
    alt='menu'
    className='w-[28px] h-[28px] object-contain cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110'
    onClick={() => setToggle(!toggle)} 
  />

  <div
    className={`${
      !toggle ? "hidden" : "flex"
    } p-12 bg-[#000] absolute top-20 left-0 w-full h-auto z-10 rounded-b-xl shadow-lg transform transition-all duration-300 ease-in-out`}
  >
    <ul className='list-none  flex justify-start items-start flex-1 flex-col gap-4'>
      {navLinks.map((nav) => (
        <li
          key={nav.id}
          className={`font-poppins mb-2  font-medium cursor-pointer text-[16px] ${
            active === nav.title ? "text-white" : "text-secondary"
          } transition-colors duration-200 ease-in-out hover:text-white`}
          onClick={() => {
            setToggle(!toggle);
            setActive(nav.title);
          }}
        >
          <a href={`#${nav.id}`}>{nav.title}</a>
        </li>
      ))}
    </ul>
  </div>
</div>


        </div>
      
    </nav>
  );
};

export default Navbar;
