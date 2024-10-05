// src/App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashBoard from "./pages/DashBoard.jsx"; // Ensure this component exists
import Home from "./pages/Home.jsx";

import Login from "./pages/Login.jsx"; // Ensure this component exists

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login page is outside the layout */}
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="about" element={<DashBoard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
