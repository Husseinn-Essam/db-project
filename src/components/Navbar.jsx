import React from "react";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
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
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            DB PROJECT
          </Link>
        </div>
        <div className="navbar-end gap-2   ">
          <button data-set-theme="dark" data-act-class="ACTIVECLASS">
            <MoonIcon className="h-6 w-6 " />
          </button>
          <button data-set-theme="light" data-act-class="ACTIVECLASS">
            <SunIcon className="h-6 w-6 " />
          </button>
          <div className="hidden md:flex gap-1">
            <button className="btn">
              <Link to="/login">Log in</Link>
            </button>
            <button className="btn">
              <Link to="/signup">Sign up</Link>
            </button>
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
          <button className="mt-1">
            <Link to="/login">Log in</Link>
          </button>
          {/* {divder} */}

          <div className="divider mt-0 mb-0"></div>

          <button className="">
            {" "}
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
