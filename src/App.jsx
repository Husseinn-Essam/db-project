import { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div data-theme="" className="h-full">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<div>hi</div>} />
      </Routes>
    </div>
  );
}

export default App;
