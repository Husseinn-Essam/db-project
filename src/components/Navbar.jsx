import React from "react";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <>
      <div className="navbar  bg-base-100 shadow-xl">
        <div className="navbar-start">Links here</div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">DB PROJECT</a>
        </div>
        <div className="navbar-end gap-2">
          <button data-set-theme="dark" data-act-class="ACTIVECLASS">
            <MoonIcon className="h-6 w-6 " />
          </button>
          <button data-set-theme="light" data-act-class="ACTIVECLASS">
            <SunIcon className="h-6 w-6 " />
          </button>
          <button className="btn">Log in</button>
          <button className="btn">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
