import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">Links here</div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">DB PROJECT</a>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn">Log in</button>
          <button className="btn">Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
