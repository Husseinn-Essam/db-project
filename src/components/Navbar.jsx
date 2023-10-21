import React from "react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar justify-center  bg-base-100 shadow-xl">
        <div className="hidden navbar-start md:flex">links</div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">DB PROJECT</a>
        </div>
        <div className="navbar-end gap-2   ">
          <button data-set-theme="dark" data-act-class="ACTIVECLASS">
            <MoonIcon className="h-6 w-6 " />
          </button>
          <button data-set-theme="light" data-act-class="ACTIVECLASS">
            <SunIcon className="h-6 w-6 " />
          </button>
          <div className="hidden md:flex">
            <button className="btn">Log in</button>
            <button className="btn">Sign up</button>
          </div>
          <button className="xl" onClick={toggleOpen}>
            <Bars3Icon className="h-10 w-10 md:hidden " />
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          data-theme=""
          className="h-fit w-full flex gap-1  flex-col flex-wrap  md:hidden relative z-10 top-0 left-0  font-bold  "
        >
          <button className="mt-1">Log in</button>
          {/* {divder} */}

          <div className="divider mt-0 mb-0"></div>

          <button className="">Sign up</button>
        </div>
      )}
    </>
  );
};

export default Navbar;
